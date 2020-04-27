import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';
import { CloudFirebaseService } from '../../service/cloud-firebase.service';
import { DATA_SCIENTIST_INIT, DataScientist } from '../../repository/data-drag-drop';
import { ConfirmSignalComponent } from '../../component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  private static $docIndex;
  @ViewChild(ConfirmSignalComponent) confirmSignalElement: ConfirmSignalComponent;
  dataScientist = DATA_SCIENTIST_INIT;
  copyOfDataForDefaultValues: DataScientist[];
  toggleArray: boolean[] = [];
  private copyOfDataForResetAsString: string;
  private counter = 0;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private cFService: CloudFirebaseService
  ) {
    if (typeof this.docIndex !== 'number') {
      FormComponent.$docIndex = this.cFService.setCollectionAndDocument('forms', 'form-template-driven');
    }
  }

  private get docIndex() {
    return FormComponent.$docIndex;
  }

  private static showIfLoggedIn(value) {
    console.log('- - - - - - isLoggedIn:', value)
  }

  anuluj() {
    this.router.navigate(['choose']);
  }

  ngOnInit() {
    StartComponent.bodyRef.classList.add('body_background_image');
    this.makeCopiesOfFormData();
    this.subscription.add(this.cFService.checkIfLoggedIn2().subscribe({next: FormComponent.showIfLoggedIn}))
  }

  ngAfterViewInit() {
    this.initDataInDB();
  }

  ngOnDestroy() {
    StartComponent.restoreClassesOfBody();
    this.subscription.unsubscribe();
  }

  resetForm() {
    this.dataScientist.splice(0);
    this.dataScientist.push(...JSON.parse(this.copyOfDataForResetAsString));
  }

  saveForm() {
    console.log(this.dataScientist);
    this.cFService.saveDocumentDataAtIndex(this.dataScientist, this.docIndex).then(() => {
      this.makeCopiesOfFormData();
      this.beep(true);
    }).catch(() => this.beep());
  }

  checkForMultiLine(data: string): boolean {
    return data ? data.search(new RegExp(/[\r\n]/)) !== -1 || data.length > 15 : false;
  }

  addRow(index: number) {
    this.toggleRotateY(index);
    if (!this.dataScientist[index + 1]) {
      const label = String.fromCharCode('E'.charCodeAt(0) + this.counter++) + 'pq';
      this.dataScientist[index + 1] = {
        label,
        field: '',
        value: '',
        addButton: true,
        addButtonActivated: false
      };
      this.dataScientist[index].addButtonActivated = true;
    } else {
      this.dataScientist.splice(index + 1, 1);
      this.dataScientist[index].addButtonActivated = !!this.dataScientist[index + 1];
      this.toggleArray.splice(index + 1, 1);
    }
    this.makeCopiesOfFormData();
  }

  private makeCopiesOfFormData() {
    this.copyOfDataForResetAsString = JSON.stringify(this.dataScientist);
    this.copyOfDataForDefaultValues = JSON.parse(this.copyOfDataForResetAsString);
  }

  private toggleRotateY(index: number) {
    // return this.dataScientist[index].toggle = !this.dataScientist[index].toggle;
    return this.toggleArray[index] = !this.toggleArray[index];
  }

  private initDataInDB() {
    if (this.cFService.checkIfLoggedIn()) {
      this.subscription.add(this.cFService.getDocumentDataAtIndex(this.docIndex).subscribe((docSnapshot) => {
        if (!docSnapshot.exists) {
          this.cFService.saveDocumentDataAtIndex(this.dataScientist, this.docIndex).then(() => this.beep(true)).catch(() => this.beep());
          return;
        }
        this.dataScientist = docSnapshot.data().formData;
        this.makeCopiesOfFormData();
        this.beep(true);
      }));
      return;
    }
    this.beep()
  }

  private beep(success?: boolean) {
    this.confirmSignalElement.start(success)
  }
}

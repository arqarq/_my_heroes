import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';
import { CloudFirebaseRepository } from '../../repository/cloud-firebase-repository.service';
import { DATA_SCIENTIST_INIT } from '../../repository/data-drag-drop';
import { ConfirmSignalComponent } from '../../component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  @ViewChild(ConfirmSignalComponent) confirmSignalElement: ConfirmSignalComponent;
  dataScientist = DATA_SCIENTIST_INIT;
  copyOfDataForDefaultValues;
  toggleArray: boolean[] = [];
  private copyOfDataForResetAsString: string;
  private counter = 0;
  private readonly docIndex;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private cFR: CloudFirebaseRepository
  ) {
    this.docIndex = this.cFR.setCollectionAndDocument('forms', 'form-template-driven');
  }

  anuluj() {
    this.router.navigate(['choose']);
  }

  ngOnInit() {
    StartComponent.bodyRef.classList.add('body_background_image');
    this.makeCopiesOfFormData();
    this.initDataInDB();
  }

  ngOnDestroy() {
    StartComponent.restoreClassesOfBody();
    this.subscription.unsubscribe();
  }

  resetForm() {
    this.dataScientist = JSON.parse(this.copyOfDataForResetAsString);
  }

  saveForm() {
    console.log(this.dataScientist);
    this.cFR.saveDocumentDataAtIndex(this.dataScientist, this.docIndex).then(() => {
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
    this.subscription.add(this.cFR.getDocumentDataAtIndex(this.docIndex).subscribe((docSnapshot) => {
      if (!docSnapshot.exists) {
        this.cFR.saveDocumentDataAtIndex(this.dataScientist, this.docIndex).then(() => this.beep(true)).catch(() => this.beep());
        return;
      }
      this.dataScientist = docSnapshot.data().formData;
      this.makeCopiesOfFormData();
      this.beep(true);
    }));
  }

  private beep(success?: boolean) {
    this.confirmSignalElement.start(success);
  }
}

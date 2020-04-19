import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';
import { CloudFirebaseRepository } from '../../repository/cloud-firebase-repository.service';
import { DATA_SCIENTIST_INIT } from '../../repository/data-drag-drop';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  dataScientist = DATA_SCIENTIST_INIT;
  copyOfDataForDefaultValues;
  toggleArray: boolean[] = [];
  private copyOfDataForResetAsString: string;
  private counter = 0;
  private readonly docIndex;

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
  }

  resetForm() {
    this.dataScientist = JSON.parse(this.copyOfDataForResetAsString);
  }

  saveForm() {
    console.log(this.dataScientist);
    this.cFR.saveDocumentDataAtIndex(this.dataScientist, this.docIndex).then(() => this.makeCopiesOfFormData());
  }

  checkForMultiLine(data: string): boolean {
    return data ? data.search(new RegExp(/[\r\n]/)) !== -1 || data.length > 16 : false;
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
    this.cFR.getDocumentDataAtIndex(this.docIndex).then((docSnapshot) => {
      if (!docSnapshot.exists) {
        this.cFR.saveDocumentDataAtIndex(this.dataScientist, this.docIndex);
        return;
      }
      this.cFR.getDocumentDataAtIndex(this.docIndex).then((docSnapshot2) => {
        this.dataScientist = docSnapshot2.data().formData;
        this.makeCopiesOfFormData();
      });
    });
  }
}

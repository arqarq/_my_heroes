import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';
import { CloudFirebaseService } from '../../service/cloud-firebase.service';
import { ConfirmSignalComponent } from '../../component';
import { Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';
import { DataScientist, ERROR_MESSAGE, ErrorType, NewRowDefinition } from '../../util/data-types';
import { DATA_SCIENTIST_INIT } from '../../repository/data-form-template';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  static $docIndex;
  @ViewChild(ConfirmSignalComponent) confirmSignalElement: ConfirmSignalComponent;
  @ViewChildren(NgModel) ngModels: QueryList<NgModel>
  dataScientist = DATA_SCIENTIST_INIT
  copyOfDataForDefaultValues: DataScientist[]
  toggleArray: boolean[] = []
  inputLeftInvalidArray = []
  inputRightInvalidFixArray = []
  private copyOfDataForResetAsString: string
  private subscription = new Subscription()

  constructor(
    private router: Router,
    private cFService: CloudFirebaseService
  ) {
    FormComponent.$docIndex = this.cFService.setCollectionAndDocument('forms', 'form-template-driven', FormComponent.$docIndex)
  }

  private get docIndex() {
    return FormComponent.$docIndex;
  }

  private static showIfLoggedIn(value) {
    console.log('- - - - - - isLoggedIn:', value)
  }

  cancel() {
    this.router.navigate(['choose']);
  }

  ngOnInit() {
    StartComponent.bodyRef.classList.add('body_background_image');
    this.makeCopiesOfFormData();
    this.subscription.add(this.cFService.checkIfLoggedIn2().subscribe({next: FormComponent.showIfLoggedIn}))
  }

  ngAfterViewInit() {
    this.initDataInDB()
  }

  ngOnDestroy() {
    StartComponent.restoreClassesOfBody();
    this.subscription.unsubscribe();
  }

  onFormReset() {
    this.dataScientist.splice(0)
    this.dataScientist.push(...JSON.parse(this.copyOfDataForResetAsString))
    this.forceOnModelChangeOnAllElementsWithNgModelDirective()
  }

  saveForm() {
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
      const charCodeAt0 = this.dataScientist[index].label.charCodeAt(0)
      const char = charCodeAt0 ? charCodeAt0 : 'D'.charCodeAt(0)
      const label = String.fromCharCode(char + 1) + 'pq'
      this.dataScientist[index + 1] = new NewRowDefinition(label, '', '', {addButton: true})
      if (this.dataScientist[index].options) {
        this.dataScientist[index].options.addButtonActivated = true
      } else {
        this.dataScientist[index].options = {addButtonActivated: true}
      }
      this.forceOnModelChangeOnAllElementsWithNgModelDirective()
    } else {
      this.dataScientist.splice(index + 1, 1);
      if (this.dataScientist[index].options) {
        this.dataScientist[index].options.addButtonActivated = !!this.dataScientist[index + 1];
      }
      this.toggleArray.splice(index + 1, 1);
    }
    this.makeCopiesOfFormData();
  }

  setInputLeftInvalid(ngModel: NgModel, i: number) {
    const err = ngModel.errors as ErrorType
    if (!err) {
      this.inputLeftInvalidArray[i] = undefined
      return
    }
    if (err.maxlength) {
      this.inputLeftInvalidArray[i] = ERROR_MESSAGE.leftMaxlength + err.maxlength.requiredLength + '.'
      return
    }
    if (err.minlength) {
      this.inputLeftInvalidArray[i] = ERROR_MESSAGE.leftMinlength + err.minlength.requiredLength + '.'
      return;
    }
    if (err.required) {
      this.inputLeftInvalidArray[i] = ERROR_MESSAGE.leftRequired
      return
    }
    this.inputLeftInvalidArray[i] = ERROR_MESSAGE.generic
  }

  setInputRightInvalidFix(ngModel: NgModel, i: number) {
    const err = ngModel.errors as ErrorType
    if (!err) {
      this.inputRightInvalidFixArray[i] = undefined
      return
    }
    if (err.maxlength) {
      this.inputRightInvalidFixArray[i] = ERROR_MESSAGE.rightMaxlength + err.maxlength.requiredLength + '.'
      return
    }
    if (err.minlength) {
      this.inputRightInvalidFixArray[i] = ERROR_MESSAGE.rightMinlength + err.minlength.requiredLength + '.'
      return;
    }
    if (err.required) {
      this.inputRightInvalidFixArray[i] = ERROR_MESSAGE.rightRequired
      return
    }
    this.inputRightInvalidFixArray[i] = ERROR_MESSAGE.generic
  }

  private forceOnModelChangeOnAllElementsWithNgModelDirective() {
    const timeout = setTimeout(() => { // next event cycle
      this.ngModels.forEach((item) => item.viewToModelUpdate(item.value)) // forcing ngModelChange() for each
      clearTimeout(timeout)
    }, 1)
  }

  private makeCopiesOfFormData() {
    this.copyOfDataForResetAsString = JSON.stringify(this.dataScientist);
    this.copyOfDataForDefaultValues = JSON.parse(this.copyOfDataForResetAsString);
  }

  private toggleRotateY(index: number) {
    return this.toggleArray[index] = !this.toggleArray[index]
  }

  private initDataInDB() {
    if (this.cFService.checkIfLoggedIn()) {
      this.subscription.add(this.cFService.getDocumentDataAtIndex(this.docIndex).subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          this.dataScientist = docSnapshot.data().formData;
          this.makeCopiesOfFormData();
          this.forceOnModelChangeOnAllElementsWithNgModelDirective()
          this.beep(true)
        } else {
          this.cFService.saveDocumentDataAtIndex(this.dataScientist, this.docIndex)
            .then(() => this.beep(true))
            .catch(() => this.beep())
            .finally(() => this.forceOnModelChangeOnAllElementsWithNgModelDirective())
        }
      }))
      return
    }
    this.forceOnModelChangeOnAllElementsWithNgModelDirective()
    this.beep()
  }

  private beep(success?: boolean) {
    this.confirmSignalElement.start(success)
  }
}

import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { LOCALE_ID_NUMBERS } from '../locale/LIDs';
import { LANG_INIT_STORAGE_KEY, LANG_STORAGE_KEY, LocalStorageService } from './service/local-storage.service';
import { environment } from '../environments/environment';
import { CheckForUpdateService } from './service/check-for-update.service';
import { PromptUpdateService } from './service/prompt-update.service';
import { LogUpdateService } from './service/log-update.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  readonly langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly localeIdNumbersValues: string[];
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  private addressSplit: string[];

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService,
    sw: LogUpdateService,
    cu: CheckForUpdateService,
    pu: PromptUpdateService
    // private router: Router,
    // private location: Location
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    this.langStored = !!this.langStoredCode;
    this.localeIdNumbersValues = Object.values(this.localeIdNumbers);
    this.prepareAddress();
  }

  ngOnInit() {
    console.log('----------------------------------------------------------------------' +
      '---------------------------------------------------------------------- PROD?', environment.production);
    if (
      this.langStored &&
      this.langStoredCode !== this.localeId &&
      environment.production
    ) {
      // document.getElementById(this.langStoredCode).click();
      // window.location.href = addressSplit + `/${this.langStoredCode}`;
      document.location.href = this.replaceLocaleInAddress(this.langStoredCode);
    } else {
      if (
        this.localeId !== this.browserLocaleID &&
        !this.storage.checkEntryAtGivenKey(LANG_INIT_STORAGE_KEY) &&
        this.localeIdNumbersValues.includes(this.browserLocaleID)
      ) {
        this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.browserLocaleID);
        this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
        // document.getElementById(this.browserLocaleID).click();
        // window.location.href = addressSplit + `/${this.browserLocaleID}`;
        document.location.href = this.replaceLocaleInAddress(this.browserLocaleID);
      }
    }
    // console.log('------------------------');
    // console.log(strings[0] + '//' + strings[2] + '/es');
    // console.log('------------------------');
    // console.log(this.location.path());
    // console.log('------------------------');
    // console.log(this.router.url);
    // console.log('------------------------');
    // window.location.href = strings[0] + '//' + strings[2] + '/en';
    // this.router.navigate(['es', 'choose']);
  }

  private prepareAddress() {
    const currentAddress = document.location.href;
    this.addressSplit = currentAddress.split('/');
    if (this.addressSplit[this.addressSplit.length - 1] === '') {
      this.addressSplit.pop();
    }
  }

  private replaceLocaleInAddress(localeId: string): string {
    const indexFound = this.addressSplit.findIndex((val) => this.localeIdNumbersValues.includes(val));
    if (indexFound !== -1) {
      this.addressSplit[indexFound] = localeId;
      let newAddress = '';
      this.addressSplit.forEach((val) => newAddress += val + '/');
      return newAddress.substr(0, newAddress.length - 1);
    }
    // alert(this.addressSplit.length);
    // if (this.addressSplit.length === 3) {
    //   return this.addressSplit[0] + '//' + this.addressSplit[2] + `/${localeId}`;
    // } else if (this.addressSplit.length > 3) {
    //   return this.addressSplit[0] + '//' + this.addressSplit[2] + `/${localeId}`;
    // }
  }
}

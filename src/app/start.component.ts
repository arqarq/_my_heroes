import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { LOCALE_ID_NUMBERS } from '../locale/LIDs';
import { environment } from '../environments/environment';
import { LANG_INIT_STORAGE_KEY, LANG_STORAGE_KEY, LANG_USER_IS_SWITCHING, LocalStorageService } from './service/local-storage.service';
import { LangChangeRelayService } from './service/lang-change-relay.service';
import { LogUpdateService } from './service/log-update.service';
import { CheckForUpdateService } from './service/check-for-update.service';
import { PromptUpdateService } from './service/prompt-update.service';
import { CloudFirebaseService } from './service/cloud-firebase.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  ver: string;
  readonly langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly localeIdNumbersValues: string[];
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  private addressSplit: string[];

  constructor(
    public lcr: LangChangeRelayService, // instancja
    @Inject(LOCALE_ID) readonly localeId: string,
    private storage: LocalStorageService,
    // private el: ElementRef, // (1) niepotrzebne
    sw: LogUpdateService, // wywołaj constructor
    cu: CheckForUpdateService, // wywołaj constructor
    pu: PromptUpdateService, // wywołaj constructor
    db: CloudFirebaseService
    // private router: Router,
    // private location: Location
  ) {
    this.ver = environment.VERSION;
    this.showLangsInConsole();
    this.localeId = this.localeId.slice(0, 2); // 'en-US' -> 'en' w Ivy jak wyjdzie 9.0.0
    if (environment.isNode) {
      this.browserLocaleID = this.localeId;
    } else {
      // this.setLangInHTMLElement(); // (1) niepotrzebne - przygotowane osobne pliki 'index.html' dla lokalizacji
      this.browserLocaleID = navigator.language.slice(0, 2);
      this.prepareAddress();
    }
    this.langStored = !!(this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY));
    this.localeIdNumbersValues = Object.values(this.localeIdNumbers);
  }

  ngOnInit() {
    this.checkIfUserIsSwitchingLanguage();
    this.showAngularVersion();
    // console.log(strings[0] + '//' + strings[2] + '/es');
    // console.log(this.location.path());
    // console.log(this.router.url);
    // window.location.href = strings[0] + '//' + strings[2] + '/en';
    // this.router.navigate(['es', 'choose']);
  }

  private showAngularVersion() {
    const elementsByTagName = document.body.getElementsByTagName('app-start');
    const angVer = elementsByTagName.length ? elementsByTagName.item(0).getAttribute('ng-version') : null;
    this.ver = String(this.ver).concat(' / @ang ' + (angVer || 'n/a')).concat(' / Ivy on? ' + environment.IVY_ON);
  }

  private showLangsInConsole() {
    console.log('---------------------------------------------------------------------- %clang from browser:%c ' +
      (!environment.isNode ? navigator.language : 'node'),
      'color: red', 'color: red; font-weight: bolder');
    console.log('---------------------------------------------------------------------- %craw lang from @ang:%c ' +
      (!environment.isNode ? this.localeId : 'node'),
      'color: red', 'color: red; font-weight: bolder');
  }

  private checkIfUserIsSwitchingLanguage() {
    if (this.storage.checkEntryAtGivenKey(LANG_USER_IS_SWITCHING)) {
      this.storage.removeStorageAtGivenKey(LANG_USER_IS_SWITCHING);
      if (this.langStored) {
        this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
        this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
      }
      this.lcr.resetFlag(100);
    } else {
      this.redirectToOtherLang();
    }
  }

  private redirectToOtherLang() {
    if (
      this.langStored &&
      this.langStoredCode !== this.localeId
    ) {
      this.changeLocationToGivenIfInProdAndNotNode(this.langStoredCode);
    } else if (
      this.localeId !== this.browserLocaleID &&
      !this.storage.checkEntryAtGivenKey(LANG_INIT_STORAGE_KEY) &&
      this.localeIdNumbersValues.includes(this.browserLocaleID)
    ) {
      this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.browserLocaleID);
      this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
      this.changeLocationToGivenIfInProdAndNotNode(this.browserLocaleID);
    } else {
      this.lcr.resetFlag(100);
    }
  }

  private changeLocationToGivenIfInProdAndNotNode(localeId: string) {
    if (!environment.isNode && environment.production) {
      document.location.href = this.replaceLocaleInAddress(localeId);
      // document.location.replace(this.replaceLocaleInAddress(localeId));
    } else {
      this.lcr.resetFlag(100);
    }
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
  }

  // private setLangInHTMLElement() { // (1) niepotrzebne
  //   const lang = document.createAttribute('lang');
  //   lang.value = this.localeId;
  //   this.el.nativeElement.parentElement.parentElement.attributes.setNamedItem(lang);
  //   // document.documentElement.lang = 'es'; // inny sposób
  // }
}

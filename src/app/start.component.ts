import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { slideInAnimation } from './module/crisis/animations';
import { LOCALE_ID_NUMBERS } from '../locale/LIDs';
import { LANG_INIT_STORAGE_KEY, LANG_STORAGE_KEY, LocalStorageService } from './service/local-storage.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [slideInAnimation]
})
export class StartComponent implements OnInit {
  readonly langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  readonly langStoredCode: string;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService
    // private router: Router,
    // private location: Location
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    this.langStored = !!this.langStoredCode;
  }

  ngOnInit() {
    const strings = window.location.href.split('/');
    const address = strings[0] + '//' + strings[2];
    console.log('----------------------------------------------------------------------' +
      '---------------------------------------------------------------------- PROD?', environment.production);
    if (
      this.langStored &&
      this.langStoredCode !== this.localeId &&
      environment.production
    ) {
      // document.getElementById(this.langStoredCode).click();
      window.location.href = address + `/${this.langStoredCode}`;
    } else {
      if (
        this.localeId !== this.browserLocaleID &&
        !this.storage.checkEntryAtGivenKey(LANG_INIT_STORAGE_KEY) &&
        Object.values(this.localeIdNumbers).includes(this.browserLocaleID)
      ) {
        this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.browserLocaleID);
        this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
        // document.getElementById(this.browserLocaleID).click();
        window.location.href = address + `/${this.browserLocaleID}`;
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
}

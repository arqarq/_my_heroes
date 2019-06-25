import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import { LocalStorageService } from '../../service/local-storage.service';

// const LANG_STORAGE_KEY = 'lang';
// const LANG_FIRST_STORE_KEY = 'lang_first';
const LANG_INIT_STORAGE_KEY = 'lang_init';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styles: [
    '.activated {color: yellow}'
  ],
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit, AfterViewInit {
  localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  private title = 'Wybór';

  constructor(
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  ngAfterViewInit() { // only once, ngAfterViewChecked() can be more than once
    if (
      this.localeId !== this.browserLocaleID &&
      !this.storage.getStringStoredAtGivenKey(LANG_INIT_STORAGE_KEY) &&
      Object.values(this.localeIdNumbers).includes(this.browserLocaleID)
    ) {
      this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY, this.localeId);
      document.getElementById(this.browserLocaleID).click();
    } else {
      this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY, this.localeId);
    }
    // const langStored = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    // const langInitialized = this.storage.getStringStoredAtGivenKey(LANG_INIT_STORAGE_KEY);
    // const langFirstStored = this.storage.getStringStoredAtGivenKey(LANG_FIRST_STORE_KEY);
    //
    // if (Object.values(this.localeIdNumbers).includes(this.browserLocaleID)) {
    //   if (langInitialized) {
    //     if (langStored && langStored !== this.localeId) {
    //       if (!langFirstStored) {
    //         this.storage.storeStringAtGivenKey(LANG_FIRST_STORE_KEY, 'done');
    //         this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
    //       } else {
    //         this.storage.storeStringAtGivenKey(LANG_FIRST_STORE_KEY);
    //         document.getElementById(langStored).click();
    //       }
    //     }
    //   } else {
    //     this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY, this.browserLocaleID);
    //     if (this.browserLocaleID !== this.localeId) {
    //       document.getElementById(this.browserLocaleID).click();
    //     }
    //   }
    // }
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

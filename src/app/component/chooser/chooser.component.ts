import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import { LocalStorageService } from '../../module/crisis/service/local-storage.service';

const LANG_STORAGE_KEY = 'lang';

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
    const stringStoredAtGivenKey = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    if (
      // this.browserLocaleID !== this.localeIdNumbers[1033] &&
      !stringStoredAtGivenKey &&
      this.browserLocaleID !== this.localeId &&
      Object.values(this.localeIdNumbers).includes(this.browserLocaleID)
    ) {
      this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.browserLocaleID);
      document.getElementById(this.browserLocaleID).click();
    }
    if (stringStoredAtGivenKey) {
      if (stringStoredAtGivenKey !== this.localeId) {
        this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
      } else {
        document.getElementById(stringStoredAtGivenKey).click();
        this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
      }
    }
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import { LANG_STORAGE_KEY, LocalStorageService } from '../../service/local-storage.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styles: [
    '.activated {color: yellow}'
  ],
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit, AfterViewInit {
  readonly ver: string;
  langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  wait = true;
  private title = 'Wybór';

  constructor(
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    this.langStored = !!this.langStoredCode;
    this.ver = environment.VERSION;
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  ngAfterViewInit() { // only once, ngAfterViewChecked() can be more than once
    // if (
    //   this.langStored &&
    //   this.langStoredCode !== this.localeId
    // ) {
    //   document.getElementById(this.langStoredCode).click();
    // } else {
    //   if (
    //     this.localeId !== this.browserLocaleID &&
    //     !this.storage.checkEntryAtGivenKey(LANG_INIT_STORAGE_KEY) &&
    //     Object.values(this.localeIdNumbers).includes(this.browserLocaleID)
    //   ) {
    //     this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.browserLocaleID);
    //     this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
    //     document.getElementById(this.browserLocaleID).click();
    //   }
    // }
    setTimeout(() => this.wait = false, 300);
  }

  langStorageChanged(event: boolean) {
    this.langStored = event;
    if (event) {
      this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
    } else {
      this.storage.removeStorageAtGivenKey(LANG_STORAGE_KEY);
      // this.storage.removeStorageAtGivenKey(LANG_INIT_STORAGE_KEY);
    }
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

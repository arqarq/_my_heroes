import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import { LANG_STORAGE_KEY, LocalStorageService } from '../../service/local-storage.service';
import { environment } from '../../../environments/environment';
import { LangChangeRelayService } from '../../service/lang-change-relay.service';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styles: [
    '.activated {color: yellow}'
  ],
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  readonly ver: string;
  langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  // wait: boolean;
  private title = 'Wybór';

  constructor(
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService,
    public lcr: LangChangeRelayService
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    this.langStored = !!this.langStoredCode;
    this.ver = environment.VERSION;
    // this.wait = this.lcr.langSwitched;
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  // ngAfterViewInit() { // only once, ngAfterViewChecked() can be more than once
  //   if (this.wait) {
  //     setTimeout(() => this.wait = false, 500);
  //   }
  // }

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

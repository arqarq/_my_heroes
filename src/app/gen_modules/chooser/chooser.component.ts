import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import { LANG_INIT_STORAGE_KEY, LANG_STORAGE_KEY, LANG_USER_IS_SWITCHING, LocalStorageService } from '../../service/local-storage.service';
import { LangChangeRelayService } from '../../service/lang-change-relay.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styles: [
    '.activated {color: yellow}'
  ],
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  private title = 'Wybór';

  constructor(
    public lcr: LangChangeRelayService,
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY);
    this.langStored = !!this.langStoredCode;
    this.initWorker();
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  langStorageChanged(event: boolean) {
    this.langStored = event;
    if (event) {
      this.storage.storeStringAtGivenKey(LANG_STORAGE_KEY, this.localeId);
      this.storage.storeStringAtGivenKey(LANG_INIT_STORAGE_KEY);
    } else {
      this.storage.removeStorageAtGivenKey(LANG_STORAGE_KEY);
      this.storage.removeStorageAtGivenKey(LANG_INIT_STORAGE_KEY);
    }
  }

  switchLocaleByUser(el: HTMLAnchorElement) {
    if (this.localeId !== el.id) {
      this.storage.storeStringAtGivenKey(LANG_USER_IS_SWITCHING);
      el.href = '/' + el.id;
      el.click();
    }
  }

  private initWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../../worator.worker', {type: 'module'});
      worker.onmessage = ({data}) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('"hello"');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      if (environment.isNode) {
        console.log('Web workers not allowed here!');
      } else {
        alert('Web workers not allowed here!');
      }
    }
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

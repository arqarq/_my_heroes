import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';
import { LANG_INIT_STORAGE_KEY, LANG_STORAGE_KEY, LANG_USER_IS_SWITCHING, LocalStorageService } from '../../service/local-storage.service';
import { LangChangeRelayService } from '../../service/lang-change-relay.service';
import { WoratorService } from '../../service/worator.service';
import { CloudFirebaseService } from '../../service/cloud-firebase.service'
import { CHOOSER_ITEMS } from '../../../locale/chooser-items'

const DEFAULT_OPACITY = '0'
const DEFAULT_TRANSFORM = 'translateY(0)'
const DEFAULT_HEIGHT = 'calc(1em + 5px)'

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  langStored: boolean;
  readonly localeIdNumbers = LOCALE_ID_NUMBERS;
  readonly browserLocaleID: string;
  readonly langStoredCode: string;
  readonly dbLoggedIn$
  styleForBar = {
    opacity: DEFAULT_OPACITY,
    transform: DEFAULT_TRANSFORM,
    height: DEFAULT_HEIGHT
  }
  t
  f = false
  private title = 'Wybór';

  constructor(
    public lcr: LangChangeRelayService,
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string,
    private storage: LocalStorageService,
    private workerService: WoratorService,
    private cFService: CloudFirebaseService
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
    this.langStored = !!(this.langStoredCode = this.storage.getStringStoredAtGivenKey(LANG_STORAGE_KEY));
    this.dbLoggedIn$ = this.cFService.checkIfLoggedIn2()
  }

  get chooserItems() {
    return CHOOSER_ITEMS
  }

  ngOnInit(): void {
    this.setTitle(this.title);
    this.workerService.postToWorker('hello from ChooserComponent!');
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

  mouseOver(id: number, el: HTMLAnchorElement, el2: HTMLParagraphElement) {
    clearTimeout(this.t)
    this.styleForBar.opacity = '1'
    this.styleForBar.transform = 'translateY(' + (el.offsetTop - el2.offsetTop - 2) + 'px)'
    if (!this.f) {
      this.f = true
      this.styleForBar.height = 'calc((1em +  5px) * ' + (id + 1) + ')'
      const t = setTimeout(() => {
        this.styleForBar.height = DEFAULT_HEIGHT
        clearTimeout(t)
      }, 125)
    }
  }

  mouseLeave() {
    this.t = setTimeout(() => {
      this.styleForBar.opacity = DEFAULT_OPACITY
      this.styleForBar.transform = DEFAULT_TRANSFORM
      this.f = false
      clearTimeout(this.t)
    }, 375)
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

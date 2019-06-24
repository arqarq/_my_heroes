import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LOCALE_ID_NUMBERS } from '../../../locale/LIDs';

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
    @Inject(LOCALE_ID) public localeId: string
  ) {
    this.browserLocaleID = navigator.language.slice(0, 2);
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  ngAfterViewInit() { // only once, ngAfterViewChecked() can be more than once
    if (
      Object.values(this.localeIdNumbers).includes(this.browserLocaleID) &&
      this.browserLocaleID !== this.localeId &&
      this.browserLocaleID !== this.localeIdNumbers[1033]
    ) {
      document.getElementById(this.browserLocaleID).click();
    }
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

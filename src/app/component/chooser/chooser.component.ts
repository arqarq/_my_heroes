import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
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
export class ChooserComponent implements OnInit {
  localeIdNumbers = LOCALE_ID_NUMBERS;
  // browserLocaleID: string;
  private title = 'Wybór';

  constructor(
    private titleService: Title,
    @Inject(LOCALE_ID) public localeId: string
  ) {
    // this.browserLocaleID = navigator.language;
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

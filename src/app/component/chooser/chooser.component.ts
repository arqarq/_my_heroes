import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styles: [
    '.activated { color: yellow }'
  ],
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  title = 'Wybór';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

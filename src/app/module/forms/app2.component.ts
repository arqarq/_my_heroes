import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  und: Array<number>;
  t = typeof this.und;
  private title = 'Formularze';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

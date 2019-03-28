import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root2',
  templateUrl: './app-root2.component.html',
  styleUrls: ['./app-root2.component.css']
})
export class AppRoot2Component implements OnInit {
  title = 'Formularze';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  private setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

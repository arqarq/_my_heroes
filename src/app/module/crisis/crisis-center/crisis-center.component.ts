import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css'],
  animations: [slideInAnimation]
})
export class CrisisCenterComponent implements OnInit {
  title = 'Crisis Center';

  constructor(private titleService: Title) {
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[`animation`];
  }

  ngOnInit() {
    this.changeTitle(this.title);
  }

  private changeTitle(aaa: string) {
    this.titleService.setTitle(aaa);
  }
}

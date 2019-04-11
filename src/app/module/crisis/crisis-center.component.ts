import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { slideInAnimation } from '../../animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css'],
  animations: [slideInAnimation]
})
export class CrisisCenterComponent implements OnInit {
  title = 'Crisis Center';

  constructor(
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.changeTitle(this.title);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[`animation`];
  }

  private changeTitle(aaa: string) {
    this.titleService.setTitle(aaa);
  }
}

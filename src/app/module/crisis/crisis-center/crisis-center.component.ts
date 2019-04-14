import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css']
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

  private changeTitle(aaa: string) {
    this.titleService.setTitle(aaa);
  }
}

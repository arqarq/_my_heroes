import { Component, OnDestroy, OnInit } from '@angular/core';

const TOP_STICKY = 50;

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit, OnDestroy {
  private elementById: HTMLDivElement;
  private flag = false;
  private offset;

  constructor() {
  }

  ngOnInit(): void {
    this.elementById = document.getElementById('handle') as HTMLDivElement;
    console.log('!', this.elementById.offsetTop, 'ngOnInit:', this.elementById.getBoundingClientRect().top);
    window.onscroll = () => {
      if (!this.offset) {
        console.log('!!', this.offset = this.elementById.offsetTop, 'onscroll:', this.elementById.getBoundingClientRect().top);
      }
      if (window.pageYOffset >= this.offset + 33 - TOP_STICKY) {
        if (!this.flag) {
          this.setSticky();
        }
        return;
      }
      if (this.flag) {
        this.setRelative();
      }
    };
  }

  ngOnDestroy(): void {
    window.onscroll = null;
  }

  private setRelative() {
    this.elementById.style.position = null;
    this.elementById.style.top = null;
    this.elementById.style.left = null;
    this.flag = false;
  }

  private setSticky() {
    this.elementById.style.position = 'fixed';
    this.elementById.style.top = TOP_STICKY + 'px';
    this.elementById.style.left = '1383px';
    this.flag = true;
  }
}

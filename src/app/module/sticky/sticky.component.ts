import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';

const TOP_STICKY = 50;
const TOP_RELATIVE = 150;

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit, AfterViewChecked, OnDestroy {
  private elementById: HTMLDivElement;
  private flag = false;
  // private intervalId;
  private offset;
  private topInit;

  constructor() {
  }

  ngOnInit(): void {
    this.elementById = document.getElementById('handle') as HTMLDivElement;
    // this.intervalId = setInterval(() => {
    //   if (!this.flag) {
    //     this.setSticky();
    //     return;
    //   }
    //   this.setRelative();
    //   console.log('elementById.offsetTop', this.elementById.offsetTop,
    //     'elementById.clientTop', this.elementById.clientTop,
    //     'elementById.scrollTop', this.elementById.scrollTop);
    // }, 1500);
    document.onload = () => {
      this.topInit = this.elementById.getBoundingClientRect().top;
    };
    window.onscroll = () => {
      // console.log('window.pageYOffset:', window.pageYOffset);
      if (!this.offset) {
        this.offset = this.elementById.offsetTop;
        console.log('!', this.offset, this.elementById.getBoundingClientRect().top, this.topInit);
      }
      if (window.pageYOffset >= this.offset - TOP_STICKY) {
        if (!this.flag) {
          this.setSticky();
        }
      } else {
        if (this.flag) {
          this.setRelative();
        }
      }
    };
  }

  ngAfterViewChecked() {
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalId);
    window.onscroll = null;
  }

  private setRelative() {
    this.elementById.style.position = 'relative';
    this.elementById.style.top = TOP_RELATIVE + 'px';
    this.elementById.style.left = '1350px';
    this.flag = false;
  }

  private setSticky() {
    this.elementById.style.position = 'fixed';
    this.elementById.style.top = /*'183px'*/TOP_STICKY + 'px';
    this.elementById.style.left = '1383px';
    this.flag = true;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

const TOP_STICKY = 50;

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit, OnDestroy {
  private divElement: HTMLDivElement;
  private divElement2;
  private flag;
  private offset;

  constructor() {
  }

  ngOnInit(): void {
    this.divElement = document.getElementById('handle') as HTMLDivElement;
    this.divElement2 = document.getElementById('handle2');
    console.log('!', this.divElement.offsetTop, 'ngOnInit:', this.divElement.getBoundingClientRect().top);
    window.onscroll = () => {
      if (!this.offset) {
        console.log('!!', this.offset = this.divElement.offsetTop, 'onscroll:', this.divElement.getBoundingClientRect().top);
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
    window.onresize = window.onscroll = null;
  }

  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    let barSizeVert = window.innerWidth - document.documentElement.offsetWidth;
    let barSizeHor = window.innerHeight - document.documentElement.clientHeight;
    let pos3 = event.clientX;
    let pos4 = event.clientY;
    let flag;
    let flag2;
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
      const offsetLeft = this.divElement2.offsetLeft;
      const offsetTop = this.divElement2.offsetTop;
      const offsetWidth = this.divElement2.offsetWidth;
      const offsetHeight = this.divElement2.offsetHeight;
      if (offsetLeft < 0) {
        this.divElement2.style.left = '0';
      } else if (offsetLeft > window.innerWidth - barSizeVert - offsetWidth) {
        this.divElement2.style.right = '0';
        this.divElement2.style.left = 'unset';
      }
      if (offsetTop < 0) {
        this.divElement2.style.top = '0';
      } else if (offsetTop > window.innerHeight - barSizeHor - offsetHeight) {
        this.divElement2.style.bottom = '0';
        this.divElement2.style.top = 'unset';
      }
    };
    document.onmousemove = (event2: MouseEvent) => {
      event2.preventDefault();
      // console.log('tick ----');
      // tslint:disable-next-line:no-conditional-assignment
      if ((flag = !flag) && (flag2 = !flag2)) {
        // console.log('tick tock');
        this.divElement2.style.top = (this.divElement2.offsetTop - pos4 + event2.clientY) + 'px';
        this.divElement2.style.left = (this.divElement2.offsetLeft - pos3 + event2.clientX) + 'px';
        this.divElement2.style.bottom = null;
        this.divElement2.style.right = null;
        pos3 = event2.clientX;
        pos4 = event2.clientY;
      }
    };
    if (!window.onresize) {
      console.log('set!');
      barSizeVert = window.innerWidth - document.documentElement.offsetWidth;
      barSizeHor = window.innerHeight - document.documentElement.clientHeight;
      let flag3;
      let flag4;
      window.onresize = () => {
        if (this.divElement2.offsetLeft + this.divElement2.offsetWidth /*/ 3 */ > window.innerWidth - barSizeVert) {
          this.divElement2.style.right = '0';
          this.divElement2.style.left = 'unset';
          console.log('fired! X');
          flag3 = true;
        }
        if (this.divElement2.offsetTop + this.divElement2.offsetHeight /*/ 3 */ > window.innerHeight - barSizeHor) {
          this.divElement2.style.bottom = '0';
          this.divElement2.style.top = 'unset';
          console.log('fired! Y');
          flag4 = true;
        }
        // tslint:disable-next-line:no-unused-expression
        flag3 && flag4 && !(window.onresize = null) && console.log('unset!');
        // tslint:disable-next-line:no-unused-expression
        flag3 || flag4 || console.log('nothing! X: OK, Y: OK');
      };
    }
  }

  private setRelative() {
    this.divElement.style.position = null;
    this.divElement.style.top = null;
    this.divElement.style.left = null;
    this.flag = false;
  }

  private setSticky() {
    this.divElement.style.position = 'fixed';
    this.divElement.style.top = TOP_STICKY + 'px';
    this.divElement.style.left = '1383px';
    this.flag = true;
  }
}

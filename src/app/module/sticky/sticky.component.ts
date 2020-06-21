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
  private flag3;
  private flag4;
  private offset;

  ngOnInit(): void {
    this.divElement = document.getElementById('handle') as HTMLDivElement;
    this.divElement2 = document.getElementById('handle2');
    console.log('!', this.divElement.offsetTop, 'ngOnInit:', this.divElement.getBoundingClientRect().top);
    window.onscroll = () => {
      if (!this.offset) {
        console.log('!!', this.offset = this.divElement.offsetTop, 'onscroll:', this.divElement.getBoundingClientRect().top);
      }
      if (window.pageYOffset >= this.offset + 33 - TOP_STICKY) {
        // eslint-disable-line @typescript-eslint/no-unused-expressions
        !this.flag && this.setSticky();
        return;
      }
      // eslint-disable-line @typescript-eslint/no-unused-expressions
      this.flag && this.setRelative();
    };
  }

  ngOnDestroy(): void {
    window.onresize = window.onscroll = null;
  }

  onMouseDown(event: MouseEvent) {
    event.preventDefault();

    let barSizeVert;
    let barSizeHor;
    let pos3 = event.clientX;
    let pos4 = event.clientY;
    let flag;
    let flag2;

    document.onmousemove = (event2: MouseEvent) => {
      event2.preventDefault();
      // console.log('tick ----');
      // eslint-disable-line no-cond-assign
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
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;

      barSizeVert = window.innerWidth - document.documentElement.offsetWidth;
      barSizeHor = window.innerHeight - document.documentElement.clientHeight;
      const offsetLeft = this.divElement2.offsetLeft;
      const offsetTop = this.divElement2.offsetTop;
      const offsetWidth = this.divElement2.offsetWidth;
      const offsetHeight = this.divElement2.offsetHeight;
      this.flag3 = this.flag4 = true;

      if (offsetLeft < 0) {
        this.divElement2.style.left = '0';
      } else if (offsetLeft >= window.innerWidth - barSizeVert - offsetWidth) {
        this.divElement2.style.right = '0';
        this.divElement2.style.left = 'unset';
      } else {
        this.flag3 = false;
      }
      if (offsetTop < 0) {
        this.divElement2.style.top = '0';
      } else if (offsetTop >= window.innerHeight - barSizeHor - offsetHeight) {
        this.divElement2.style.bottom = '0';
        this.divElement2.style.top = 'unset';
      } else {
        this.flag4 = false;
      }
      if (!window.onresize && !(this.flag3 && this.flag4)) {
        console.log('set!');
        window.onresize = () => {
          barSizeVert = window.innerWidth - document.documentElement.offsetWidth;
          barSizeHor = window.innerHeight - document.documentElement.clientHeight;

          if (!this.flag3 && this.divElement2.offsetLeft + this.divElement2.offsetWidth /*/ 3 */ > window.innerWidth - barSizeVert) {
            this.divElement2.style.right = '0';
            this.divElement2.style.left = 'unset';
            console.log('fired! X');
            this.flag3 = true;
          }
          if (!this.flag4 && this.divElement2.offsetTop + this.divElement2.offsetHeight /*/ 3 */ > window.innerHeight - barSizeHor) {
            this.divElement2.style.bottom = '0';
            this.divElement2.style.top = 'unset';
            console.log('fired! Y');
            this.flag4 = true;
          }
          // eslint-disable-line @typescript-eslint/no-unused-expressions
          this.flag3 || this.flag4 || console.log('nothing! X: ok, Y: ok');
          // eslint-disable-line @typescript-eslint/no-unused-expressions
          this.flag3 && this.flag4 && !(window.onresize = null) && console.log('unset!');
        };
      } else if (window.onresize && this.flag3 && this.flag4) {
        window.onresize = null;
        console.log('unset!');
      }
    };
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
    this.divElement.style.left = '383px'
    this.flag = true;
  }
}

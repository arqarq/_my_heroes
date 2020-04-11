import { AfterViewInit, Directive, Input } from '@angular/core';

@Directive({selector: '[appTranslate2dWithFixForHalfPixelInChrome]'})
export class Translate2dWithFixForHalfPixelInChromeDirective implements AfterViewInit {
  private $xPerc = -50;
  private $yPerc = -50;
  private $appTranslate2dWithFixForHalfPixelInChrome: HTMLElement;

  @Input()
  private set xPerc(value) {
    this.$xPerc = +value;
  }

  @Input()
  private set yPerc(value) {
    this.$yPerc = +value;
  }

  @Input()
  private set appTranslate2dWithFixForHalfPixelInChrome(value: HTMLElement) {
    this.$appTranslate2dWithFixForHalfPixelInChrome = value;
  }

  ngAfterViewInit() {
    this.translateWithFixForHalfPixelInChrome();
  }

  private translateWithFixForHalfPixelInChrome() {
    // console.log('height: ' + this.$appTranslate2dWithFixForHalfPixelInChrome.nativeElement.offsetHeight + ', width: ' +
    //   this.$appTranslate2dWithFixForHalfPixelInChrome.nativeElement.offsetWidth);
    const currentInlineStyle = this.$appTranslate2dWithFixForHalfPixelInChrome.getAttribute('style');
    let transform = currentInlineStyle ? currentInlineStyle + ' transform: ' : 'transform: ';
    transform += 'translate(' + Math.floor(this.$appTranslate2dWithFixForHalfPixelInChrome.offsetWidth * this.$xPerc / 100) +
      'px, ' + Math.floor(this.$appTranslate2dWithFixForHalfPixelInChrome.offsetHeight * this.$yPerc / 100) + 'px);';
    this.$appTranslate2dWithFixForHalfPixelInChrome.setAttribute('style', transform);
    // console.log(this.$appTranslate2dWithFixForHalfPixelInChrome.nativeElement.getAttribute('style'));
  }
}

import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html'
})
export class RowsComponent implements AfterViewInit, OnInit {
  private static $cdr: ChangeDetectorRef;

  @Input()
  rows: {name: string}[];

  @ContentChild(TemplateRef, {static: true})
  template: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {
    // this.cdr.detach();
    console.log('stop - constructor - working, commented out');
    RowsComponent.$cdr = cdr;
  }

  static detect() {
    this.$cdr.reattach();
    console.log('start - via RowsComponent.detect()');
  }

  ngAfterViewInit() {
    this.cdr.detach(); // TODO Ivy, ponoć w Ivy działa
    console.log('stop - ngAfterViewInit - not working');
  }

  ngOnInit() {
    this.cdr.detach();
    console.log('stop - ngOnInit - working');
  }

  onClick() {
    this.cdr.reattach();
    console.log('start - via RowsComponent');
  }
}

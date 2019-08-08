import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Injectable,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements AfterViewInit, OnInit {
  @Input()
  rows: {name: string}[];

  @ContentChild(TemplateRef, {static: true})
  template: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {
    // this.cdr.detach();
    console.log('stop - constructor');
  }

  ngAfterViewInit() {
    this.cdr.detach(); // TODO Ivy
    console.log('stop - ngAfterViewInit');
  }

  ngOnInit() {
    // this.cdr.detach();
    console.log('stop - ngOnInit');
  }
}

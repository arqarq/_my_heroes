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

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
@Injectable()
export class RowsComponent implements AfterViewInit, OnInit {
  @Input()
  rows: {name: string}[];

  @ContentChild(TemplateRef, {read: '', static: true})
  template: TemplateRef<any>;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach();
    console.log('nie stop - constructor');
  }

  detect() {
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    this.changeDetector.detach(); // TODO Ivy
    console.log('nie stop - ngAfterViewInit');
  }

  ngOnInit(): void {
    this.changeDetector.detach();
    console.log('nie stop - ngOnInit');
  }
}

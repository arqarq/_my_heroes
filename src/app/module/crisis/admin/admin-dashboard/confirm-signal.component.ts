import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-signal',
  templateUrl: './confirm-signal.component.html',
  styles: ['.confirm-signal {font-weight: bold; position: absolute; top: 5px; left: 309px}']
})
export class ConfirmSignalComponent implements OnInit {
  @Input() okOrError: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}

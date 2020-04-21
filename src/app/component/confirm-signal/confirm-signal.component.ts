import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-signal',
  templateUrl: './confirm-signal.component.html',
  styles: ['.confirm-signal {font-weight: bold; position: absolute}']
})
export class ConfirmSignalComponent {
  @Input() name: string;
  @Input() timeoutMs = 1000;
  @Input() topPx: string;
  @Input() leftPx: string;
  okOrError: boolean;
  private interval;

  constructor() {
  }

  start(success = false) {
    clearInterval(this.interval);
    this.okOrError = success;
    this.interval = setInterval(() => {
      this.okOrError = undefined;
      clearInterval(this.interval);
    }, this.timeoutMs);
  }
}

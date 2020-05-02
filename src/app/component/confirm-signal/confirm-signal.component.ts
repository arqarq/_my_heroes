import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core'

@Component({
  selector: 'app-confirm-signal',
  templateUrl: './confirm-signal.component.html',
  styles: ['.confirm-signal {font-weight: bold; position: absolute}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignalComponent {
  @Input() name: string
  @Input() timeoutMs = 1000
  @Input() topPx: string
  @Input() leftPx: string
  @Input() rightPx: string
  okOrError: boolean
  private timeout

  constructor(private cDR: ChangeDetectorRef) {
  }

  start(success = false) {
    clearTimeout(this.timeout)
    this.okOrError = success
    this.cDR.detectChanges()
    this.timeout = setTimeout(() => {
      this.okOrError = undefined
      this.cDR.detectChanges()
      clearTimeout(this.timeout)
    }, this.timeoutMs)
  }
}

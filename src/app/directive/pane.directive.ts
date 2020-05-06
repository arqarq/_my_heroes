import { Directive, Input } from '@angular/core'

// tslint:disable-next-line:directive-selector
@Directive({selector: '[pane]'})
export class PaneDirective {
  @Input() id: string
  @Input() text: string
}

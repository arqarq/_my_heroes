import { Directive, Input } from '@angular/core'

// eslint-disable-line @angular-eslint/directive-selector
@Directive({selector: '[pane]'})
export class PaneDirective {
  @Input() id: string
  @Input() text: string
}

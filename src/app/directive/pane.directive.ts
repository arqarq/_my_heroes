import { Directive, Input } from '@angular/core'

@Directive({selector: '[pane]'}) // eslint-disable-line @angular-eslint/directive-selector
export class PaneDirective {
  @Input() id: string
  @Input() text: string
}

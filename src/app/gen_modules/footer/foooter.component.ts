import { Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { PaneDirective } from '../../directive/pane.directive'

@Component({
  selector: 'app-foooter',
  templateUrl: './foooter.component.html',
  styles: [
    'section.bottom-right {position: fixed; bottom: 0; right: 0}',
    'section.bottom-right-generic {background-color: lightgrey; border-radius: 5px 0 0 0; padding: 5px}'
  ]
})
export class FoooterComponent implements OnChanges {
  @Input() a: string;
  @Input() aa: string;
  @ContentChildren(PaneDirective) pane: QueryList<PaneDirective>;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-- ngOnChanges:', JSON.parse(JSON.stringify(changes, (key, value) => {
      return value ? value : value === false ? false : value === undefined ? 'undef' : 'null';
    })));
  }
}

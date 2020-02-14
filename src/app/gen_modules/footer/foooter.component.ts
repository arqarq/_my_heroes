import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-foooter',
  templateUrl: './foooter.component.html'
})
export class FoooterComponent implements OnChanges {
  @Input() a: string;
  @Input() aa: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-- ngOnChanges:', JSON.parse(JSON.stringify(changes, (key, value) => {
      return value ? value : value === undefined ? 'undef' : 'null';
    })));
  }
}

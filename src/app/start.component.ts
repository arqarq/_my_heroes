import { Component } from '@angular/core';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [slideInAnimation]
})
export class StartComponent {
  constructor() {
  }
}

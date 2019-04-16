import { Component } from '@angular/core';
import { slideInAnimation } from './module/crisis/animations';

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

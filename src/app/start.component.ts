import { Component } from '@angular/core';
import { slideInAnimation } from './module/crisis/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [slideInAnimation]
})
export class StartComponent {
  constructor(private router: Router) {
    if (navigator.language === 'pl') {
      // router.navigateByUrl('../pl');
    } else {
      // router.navigateByUrl('../en');
    }
  }
}

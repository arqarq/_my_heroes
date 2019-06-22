import { Component } from '@angular/core';
import { slideInAnimation } from './module/crisis/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [slideInAnimation]
})
export class StartComponent/* implements OnInit*/ {
  constructor(
    // private router: Router,
    // private route: ActivatedRoute
  ) {
  }

  // ngOnInit() {
  //   if ('pl' === navigator.language) {
  //     this.router.navigateByUrl(
  //       '../pl',
  //       {
  //         relativeTo: this.route,
  //         replaceUrl: true,
  //         skipLocationChange: false
  //       });
  //   }
  // }
}

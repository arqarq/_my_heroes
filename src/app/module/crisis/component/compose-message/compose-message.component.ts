import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent {
  details: string;
  message: string;
  sending = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    const toId = setTimeout(() => {
      this.sending = false;
      this.closePopup();
      return () => clearTimeout(toId);
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate( // wszystkie możliwości ActivatedRoute
      ['', {outlets: {popup: null}}],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve',
        preserveFragment: true
      }
    );
  }
}

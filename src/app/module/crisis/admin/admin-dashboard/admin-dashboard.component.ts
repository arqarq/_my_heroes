import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../../../../service/local-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  sessionId: Observable<string>;
  token: Observable<string>;
  private subscription: Subscription;
  private subscription2: Subscription;

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None')
      );
    this.token = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'));
    // this.store(this.extractObj());
  }

  // extractObj(): {} {
  //   const toStore = {['session_id' || 'fragment']: undefined};
  //   this.subscription = this.sessionId.subscribe(
  //     next => toStore.session_id = next
  //   );
  //   this.subscription2 = this.token.subscribe(
  //     next => toStore.fragment = next
  //   );
  //   return toStore;
  // }
  //
  // store(temp: any) {
  //   this.localStorage.storeQueryParamsAndFragment(temp);
  // }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // this.subscription2.unsubscribe();
  }
}

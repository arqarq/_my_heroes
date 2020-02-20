import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from '../../../../service/selective-preloading-strategy.service';
import { CloudFirebaseService } from '../../../../service/cloud-firebase.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];
  pole: string;

  constructor(
    private route: ActivatedRoute,
    private db: CloudFirebaseService,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules.sort();
  }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap
      .pipe(map((params) => params.get('session_id') || 'None'));
    this.token = this.route.fragment
      .pipe(map((fragment) => fragment || 'None'));
    this.readFromPersistence('pole').subscribe((value) => {
      this.pole = value;
    });
  }

  readFromPersistence(key: string) {
    return this.db.getDataFromDoc(key);
  }
}

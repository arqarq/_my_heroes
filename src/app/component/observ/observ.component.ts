import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable, Subscription } from 'rxjs';
import { getDelayedValueObservable, getMultiValueObservable, getSingleValueObservable } from './observ';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit, OnDestroy {
  show = false;
  show2 = false;
  show3 = false;
  show4 = false;
  first = 'N/A';
  second = 'N/A';
  third = 9999;
  first$: Observable<string>;
  first$$: Observable<string>;
  second$: Observable<string>;
  second$$: Observable<string>;
  third$: Observable<number>;
  third$$: Observable<number>;
  values$: Observable<{first: string, second: string}>;
  values$$: Observable<{first: string, second: string, third: number}>;
  private thirdSubscription: Subscription;

  constructor() {
    this.first$ = getSingleValueObservable();
    this.first$$ = getSingleValueObservable();
    this.second$ = getDelayedValueObservable();
    this.second$$ = getDelayedValueObservable();
    this.third$ = getMultiValueObservable();
    this.third$$ = getMultiValueObservable();
    this.values$ = forkJoin<string, string>([
      getSingleValueObservable(),
      getDelayedValueObservable()])
    // getMultiValueObservable()]) // forkJoin on works for observables that complete
      .pipe(map(([first, second]) => {
        // forkJoin returns an array of values, here we map those values to an object
        return {first, second};
      }));
    this.values$$ = combineLatest<Observable<string>, Observable<string>, Observable<number>>([
      getSingleValueObservable(),
      getDelayedValueObservable(),
      getMultiValueObservable()])
      .pipe(
        map(([first, second, third]) => {
          // combineLatest returns an array of values, here we map those values to an object
          return {first, second, third};
        })
      );
  }

  ngOnDestroy() {
    this.thirdSubscription.unsubscribe();
  }

  ngOnInit() {
    getSingleValueObservable()
      .subscribe(value => this.first = value);
    getDelayedValueObservable()
      .subscribe(value => this.second = value);
    this.thirdSubscription = getMultiValueObservable()
      .subscribe(value => this.third = value);
  }
}

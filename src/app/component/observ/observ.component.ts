import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, forkJoin, merge, Observable, onErrorResumeNext, Subscription } from 'rxjs';
import {
  getDelayedValueObservable,
  getMultiValueObservable,
  getMultiValuesWithDifferentDelay,
  getSingleValueObservable
} from './observ';
import { map, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit, OnDestroy {
  place: boolean[] = [];
  show = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
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
  values$$$: Observable<string>;
  values$$$$: Observable<{first: number, second: number}>;
  values$$$$$: Observable<{val: number, id: string}>;
  values$$$$$$: Observable<{val: number, id: string}>;
  values$$$$$$$: Observable<{one: number; two: number; id: string}>;
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
      // getMultiValueObservable()]), // forkJoin on works for observables that complete
      getDelayedValueObservable()
    ]).pipe(map(([first, second]) => {
      // forkJoin returns an array of values, here we map those values to an object
      return {first, second};
    }));
    this.values$$ = combineLatest<Observable<string>, Observable<string>, Observable<number>>([
      getSingleValueObservable(),
      getDelayedValueObservable(),
      getMultiValueObservable()])
      .pipe(map(([first, second, third]) => {
        // combineLatest returns an array of values, here we map those values to an object
        return {first, second, third};
      }));
    this.values$$$ = onErrorResumeNext<string>(
      getSingleValueObservable(100),
      getMultiValueObservable().pipe(map<number, string>((el) => el + '')));
    this.values$$$$ = getMultiValueObservable().pipe(
      withLatestFrom<number, {first: number, second: number}>(getMultiValueObservable(4000), (one, two) => {
        return {first: one, second: two};
      }));
    this.values$$$$$ = getMultiValuesWithDifferentDelay(20, 79, undefined, 30);
    this.values$$$$$$ = getMultiValuesWithDifferentDelay(80, 20, undefined, undefined, 'B');
    let buff1: number;
    let buff2: number;
    this.values$$$$$$$ = merge(this.values$$$$$, this.values$$$$$$).pipe(
      tap({
        next(val) {
          if (val.id === 'A') {
            buff1 = val.val;
            return;
          }
          buff2 = val.val;
        },
        complete() {
          buff1 = undefined;
          buff2 = undefined;
        }
      }),
      map((val) => {
        if (val.id === 'A') {
          return {one: val.val, two: buff2, id: val.id};
        }
        return {one: buff1, two: val.val, id: val.id};
      }));
    this.place[7] = false;
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

  toggle7(putIdHere: string, place: number, putIdOfTheElementToMeasure?: string) {
    this.place[place] = true;
    setTimeout(() => {
      const divById = document.getElementById(putIdHere);
      const size = putIdOfTheElementToMeasure ? document.getElementById(putIdOfTheElementToMeasure).offsetHeight : 100;
      if (divById.className === 'toHide') {
        if (divById.style.height === '0' || !divById.style.height) {
          divById.style.height = size + 'px';
        } else {
          divById.style.height = '0';
          setTimeout(() => this.place[place] = false, 600);
        }
      }
    }, 100);
  }
}

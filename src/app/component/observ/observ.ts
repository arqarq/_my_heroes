import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function getSingleValueObservable(del = 2000) {
  return of('single value').pipe(delay(del));
}

export function getDelayedValueObservable() {
  return of('delayed value').pipe(delay(4000));
}

export function getMultiValueObservable() {
  return new Observable<number>((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      console.log('interval fired');
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
}

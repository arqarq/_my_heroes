import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function getSingleValueObservable(del = 2000) {
  return of('single value').pipe(delay(del));
}

export function getDelayedValueObservable(del = 4000) {
  return of('delayed value').pipe(delay(del));
}

export function getMultiValueObservable(del = 2000) {
  return new Observable<number>((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      console.log('interval fired');
    }, del);
    return () => {
      clearInterval(interval);
    };
  });
}

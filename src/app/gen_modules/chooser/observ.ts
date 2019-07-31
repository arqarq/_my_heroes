import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function getSingleValueObservable(del: number = 0) {
  return of('single value').pipe(delay(del));
}

export function getDelayedValueObservable() {
  return of('delayed value').pipe(delay(5000));
}

export function getMultiValueObservable() {
  return new Observable<number>(observer => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      console.log('interval fired');
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  });
}

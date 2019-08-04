import { Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

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

export function getMultiValuesWithDifferentDelay(del = 20, del2 = 20, interval = 100, qty = 10): Observable<number> {
  return new Observable<number>((observer) => {
    const delResulted = del * interval;
    const delResulted2 = del2 * interval;
    if (interval < 100) {
      interval = 100;
    }
    let tick = true;
    let done = true;
    let count = 1;
    let timeout;
    let timeout2;

    const intervalId = setInterval(() => {
      if (done) {
        done = false;
        if (tick) {
          timeout = setTimeout(() => {
            observer.next(count);
            tick = false;
            done = true;
            clearTimeout(timeout2);
            console.log('------------------------------------ interval fired after delResulted =', delResulted, 'ms, emitted:', count++);
          }, delResulted);
        } else {
          timeout2 = setTimeout(() => {
            observer.next(count);
            tick = true;
            done = true;
            clearTimeout(timeout);
            console.log('------------------------------------ interval fired after delResulted2 =', delResulted2, 'ms, emitted:', count++);
          }, delResulted2);
        }
      }
    }, interval);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  })
    .pipe(take(qty));
}

import { Injectable } from '@angular/core';
import { from, Observable, of, Subscription } from 'rxjs';
import { delay, map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarbleService {
  test(): Observable<number> {
    return of(true).pipe(take(1), map((x) => {
      return 5;
    }));
  }

  test2(): Observable<number[]> {
    return of([1, 2, 3, 4]).pipe(delay(5500));
  }

  test3(): Observable<number> {
    return from(Promise.resolve(9)).pipe(map((x) => {
      return x + 1;
    }));
  }

  test4(): Observable<number> {
    const prom = new Promise((resolve) => {
      setTimeout(() => {
        resolve(5);
      }, 5000);
    });

    return from(prom).pipe(map((x) => {
      return x as number;
    }));
  }

  test5(obs: Observable<number>): Observable<number> {
    return obs.pipe(map((x) => {
      return x + 1;
    }));
  }

  test6(obs: Observable<number>): Observable<number> {
    return obs.pipe(
      delay(5),
      map((x) => {
        return x + 1;
      }), switchMap(() => {
        return of(223);
      }));
  }

  test7(obs: Observable<number>): Subscription {
    return obs.subscribe((x) => {
      this.afterSubCall(x);
    });
  }

  test8(obs: Observable<number>): Subscription {
    return obs.pipe(map((x) => {
      return x * 2;
    })).subscribe((x) => {
      this.afterSubCall(x);
    });
  }

  test9(): Subscription {
    return this.getObs().subscribe((x) => {
      this.afterSubCall(x);
    });
  }

  getObs() {
    return of(5);
  }

  afterSubCall(x) {
  }
}

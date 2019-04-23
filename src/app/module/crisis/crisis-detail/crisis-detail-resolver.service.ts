import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Crisis, CRISIS_NOUN } from '../../../model/crisis';
import { EMPTY, Observable, of } from 'rxjs';
import { MarvelService } from '../../../service/marvel.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(
    private crisisService: MarvelService<Crisis>,
    private router: Router
  ) {
    crisisService.setNouns(CRISIS_NOUN);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Crisis> | Promise<Crisis> | Crisis | Observable<never> {
    const id = route.paramMap.get('id');
    return this.crisisService.getHeroNo404(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else { // id not found
          this.router.navigate(['/crisis']);
          return EMPTY;
        }
      })
    );
  }
}

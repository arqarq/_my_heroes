import { Injectable } from '@angular/core';
import { MarvelService } from '../../../../service/marvel.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolverService implements Resolve<Hero> {
  constructor(
    private heroService: MarvelService<Hero>,
    private router: Router
  ) {
    heroService.setNouns(HERO_NOUN);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero> | Promise<Hero> | Hero | Observable<never> {
    const id = route.paramMap.get('id');
    return this.heroService.getHeroNo404(id).pipe(
      take(1),
      mergeMap(hero => {
        if (hero) {
          return of(hero);
        } else {
          this.router.navigate(['/crisis/crisis-center/superheroes'])
            .then(
              (success) => console.log(state.toString() + ' / ' + success)
            );
          return EMPTY;
        }
      })
    );
  }
}

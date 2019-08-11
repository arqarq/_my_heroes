import { Injectable } from '@angular/core';
import { MarvelService } from '../../../../../service/marvel.service';
import { Hero, HERO_NOUN } from '../../../../../model/hero';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { HeroListResolverServiceModule } from './hero-list-resolver-service.module';

@Injectable({
  providedIn: HeroListResolverServiceModule
})
export class HeroListResolverService implements Resolve<Hero[]> {
  constructor(
    private heroService: MarvelService<Hero>,
    private router: Router
  ) {
    heroService.setNouns(HERO_NOUN);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero[]> | Promise<Hero[]> | Hero[] | Observable<never> {
    return this.heroService.getHeroes()
      .pipe(
        take(1),
        mergeMap(heroTab => {
            if (heroTab) {
              return of(heroTab);
            } else {
              this.router.navigate(['/crisis']);
              return EMPTY;
            }
          }
        )
      );
  }
}

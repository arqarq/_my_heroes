import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../model/hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from '../../../../service/hero.service';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  goBack(): void {
    this.location.back();
  }

  goToHeroesList(heroId: string) {
    this.router.navigate(
      ['../../superheroes', {id: heroId, foo: 'fighters'}],
      {relativeTo: this.route}
    );
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero)
      .subscribe(() => this.goBack());
  }

  ngOnInit() {
    this.hero$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) =>
        this.heroService.getHero(params.get('id'))));
  }
}

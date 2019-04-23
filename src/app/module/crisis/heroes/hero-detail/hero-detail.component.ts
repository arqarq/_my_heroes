import { Component, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MarvelService } from '../../../../service/marvel.service';
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
    private heroService: MarvelService<Hero>,
    private location: Location
  ) {
    this.heroService.setNouns(HERO_NOUN);
  }

  goBack(): void {
    this.location.back();
  }

  goToHeroesList(heroId: string) {
    this.router.navigate(
      ['../../', {id: heroId, foo: 'fighters'}],
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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MarvelService } from '../../../../service/marvel.service';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { CanDeactivateGuard } from '../../service/can-deactivate.guard';
import { DialogService } from '../../service/dialog.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent extends CanDeactivateGuard implements OnInit, OnDestroy {
  hero: Hero;
  hero$: Observable<Hero>;
  editName: string;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: MarvelService<Hero>,
    private location: Location
  ) {
    super();
    this.heroService.setNouns(HERO_NOUN);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.hero || this.hero.name === this.editName) {
      return true;
    }
    return DialogService.confirm('Discard changes?');
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
    hero.name = this.editName;
    this.subscription.add(this.heroService.updateHero(hero).subscribe(() => this.goToHeroesList(hero.id.toString())));
  }

  ngOnInitDontUse() {
    this.hero$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
      this.heroService.getHero(params.get('id'))));
  }

  ngOnInit() {
    this.subscription.add(this.route.data.subscribe((data: {hero: Hero}) => {
      this.hero = data.hero;
      this.editName = this.hero.name;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

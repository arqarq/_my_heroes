import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { MarvelService } from '../../../../service/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  // selectedHero: Hero;
  // heroTemp: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = HEROES;
  heroes: Hero[];
  private subscription: Subscription;

  constructor(private heroService: MarvelService<Hero>) {
    heroService.setNouns(HERO_NOUN);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.subscription = this.heroService.getHeroes()
      .subscribe(heroesTable => this.heroes = heroesTable);
  }

  // onSelect(hero: Hero): void {
  //   if (hero !== this.heroTemp) {
  //     this.heroTemp = hero;
  //     this.selectedHero = hero;
  //   } else {
  //     this.heroTemp = null;
  //     this.selectedHero = null;
  //   }
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.subscription = this.heroService.addHero({name} as Hero)
      .subscribe(heroO => {
        this.heroes.push(heroO);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.subscription = this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  styles: [],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // selectedHero: Hero;
  // heroTemp: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = HEROES;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroService.singular(HERO_NOUN.singular);
    this.heroService.plural(HERO_NOUN.plural);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService
      .getHeroes()
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
    this.heroService.addHero({name} as Hero)
      .subscribe(heroO => {
        this.heroes.push(heroO);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }
}

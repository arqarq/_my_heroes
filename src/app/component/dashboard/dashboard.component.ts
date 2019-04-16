import { Component, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    this.heroService.singular(HERO_NOUN.singular);
    this.heroService.plural(HERO_NOUN.plural);
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroeS => this.heroes = heroeS.slice(0, 4));
  }

  ngOnInit() {
    this.getHeroes();
  }
}

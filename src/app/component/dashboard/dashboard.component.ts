import { Component, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../model/hero';
import { MarvelService } from '../../service/marvel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: MarvelService<Hero>) {
    heroService.setNouns(HERO_NOUN);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroeS => this.heroes = heroeS.slice(0, 4));
  }

  ngOnInit() {
    this.getHeroes();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { MarvelService } from '../../../../service/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  private subscription = new Subscription();

  constructor(private heroService: MarvelService<Hero>) {
    heroService.setNouns(HERO_NOUN);
  }

  getHeroes(): void {
    this.subscription.add(this.heroService.getHeroes().subscribe((heroeS) => this.heroes = heroeS.slice(0, 4)));
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

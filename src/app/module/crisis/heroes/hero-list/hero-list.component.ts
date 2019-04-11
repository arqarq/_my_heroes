import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  heroes$: Observable<Hero[]>;
  selectedId: number;
  qty: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroeS => {
        this.heroes = heroeS;
        this.qty = this.heroes.length;
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(heroO => {
        this.heroes.push(heroO);
        this.qty = this.heroes.length;
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.qty = this.heroes.length;
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.heroes$ = this.route.paramMap
      .pipe(switchMap((params) => { // trzeba użyć w komponencie zmiennej z Observable, aby tu weszło
        this.selectedId = +params.get('id');
        console.log(this.selectedId);
        setTimeout(() => {
          console.log('time');
        }, 200);
        return this.heroService.getHeroes();
      }));
    this.getHeroes();
  }
}

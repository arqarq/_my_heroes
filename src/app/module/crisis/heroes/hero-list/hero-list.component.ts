import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { MarvelService } from '../../../../service/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes: Hero[]; // --aot
  qty: number; // --aot
  private selectedId: number;
  private subscription: Subscription;

  constructor(
    private heroService: MarvelService,
    private route: ActivatedRoute
  ) {
    this.heroService.setNouns(HERO_NOUN);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.subscription = this.heroService.addHero({name} as Hero)
      .subscribe((oneHero) => {
        this.heroes.push(oneHero);
        this.qty++;
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.subscription = this.heroService.deleteHero(hero).subscribe(
      () => {
        this.qty--;
      });
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .pipe(switchMap(params => {
        this.selectedId = +params.get('id');
        // console.log(this.selectedId);
        // setTimeout(() => console.log('time'), 50);
        this.subscription = this.heroService.getHeroes()
          .subscribe(heroTable => {
            this.heroes = heroTable;
            this.qty = heroTable.length;
          });
        return new Observable<any>();
      })).subscribe(); // trzeba zasubskrybować zmienną Observable, aby wykonało lambdy
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

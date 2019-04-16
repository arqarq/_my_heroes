import { Component, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../model/hero';
import { Observable, Subject } from 'rxjs';
import { HeroService } from '../../service/hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {
    this.heroService.singular(HERO_NOUN.singular);
    this.heroService.plural(HERO_NOUN.plural);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((termString: string) => this.heroService.searchHeroes(termString))
      );
  }
}

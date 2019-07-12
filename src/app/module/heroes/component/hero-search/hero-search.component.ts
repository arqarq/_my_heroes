import { Component, OnInit } from '@angular/core';
import { Hero, HERO_NOUN } from '../../../../model/hero';
import { Observable, Subject } from 'rxjs';
import { MarvelService } from '../../../../service/marvel.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: MarvelService<Hero>) {
    heroService.setNouns(HERO_NOUN);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((termString: string) => this.heroService.searchHeroes(termString))
    );
  }
}

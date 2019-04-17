import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private s = 'item';
  private p = 'items';
  private S = 'Item';
  private P = 'Items';
  private heroesUrl = 'api/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    // this.hero.id = 0;
    // this.hero2.id = 55;
    // this.hero.name = 'empty Hero';
    // this.hero2.name = 'zzzzzzzz';
    // this.heroTab.push(this.hero, this.hero2);
    // this.heroTab.push(this.hero);
  ) {
  }

  setNouns(value: {[key: string]: string}) {
    if (value.singular.length > 0) {
      this.s = value.singular;
      this.S = this.s.charAt(0).toUpperCase() + ((this.s.length > 1) ? this.s.slice(1) : this.s.charAt(1));
    }
    if (value.plural.length > 0) {
      this.p = value.plural;
      this.P = this.p.charAt(0).toUpperCase() + ((this.p.length > 1) ? this.p.slice(1) : this.p.charAt(1));
    }
    this.heroesUrl = `api/${this.p.toUpperCase()}`;
  }

  // plural(value: string) {
  //   this.p = value;
  // }

  // private heroesUrl = 'api/HEROES';
  // hero: Hero = new Hero();
  // hero2: Hero = new Hero();
  // heroTab: Hero[];

  // getHeroes(): Hero[] {
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');
    // this.log('fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(() => this.log('fetched ' + this.p + ' (tap)')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    console.log(url);
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} ${this.s} id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHeroNo404 id=${id}`))
      );
  }

  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   // this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   this.log(`fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  getHero(id: number | string): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(() => this.log(`fetched ${this.s} (tap) id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`/*, this.hero*/))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(() => this.log(`updated ${this.s} (tap) id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added ${this.s} (tap) /w id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = (typeof hero === 'number') ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, httpOptions)
      .pipe(
        tap(() => this.log(`deleted ${this.s} (tap) id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(() => this.log(`found (tap) ${this.p} matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`${this.S}Service: ${message}`);
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation}_failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Marvel } from '../model/marvel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MarvelService<TT extends Marvel> {
  private s = 'item';
  private p = 'items';
  private S = 'Item';
  private P = 'Items';
  private heroesUrl = 'api/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  private static tryExternalStorage<T extends Marvel>(id: number): T[] {
    if (id > 20 && id <= 100) {
      const tab = [];
      tab.push({id, name: 'Superman'} as T);
      return tab;
    } else {
      return [];
    }
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

  // getHeroes(): Hero[] {
  getHeroes(): Observable<TT[]> {
    // this.messageService.add('HeroService: fetched heroes');
    // this.log('fetched heroes');
    // return of(HEROES);
    return this.http
      .get<TT[]>(this.heroesUrl)
      .pipe(
        tap(() => this.log('fetched ' + this.p + ' (tap)')),
        catchError(this.handleError<TT[]>('get' + this.P, []))
      );
  }

  // sprawdza czy istnieje obiekt w tabeli odpowiedzi
  getHeroNo404<Data>(id: number | string): Observable<TT> { // TODO <Data>?
    const url = `${this.heroesUrl}/?id=${id}`;
    console.log('MarvelService # getHeroNo404() # url: ' + url);
    return this.http
      .get<TT[]>(url)
      .pipe(
        map(heroes => {
          console.log('zapytanie zwróciło:', heroes);
          return heroes[0];
        }),
        map(hero => {
          console.log('zapytanie zwróciło[0]:', hero);
          if (!hero) {
            this.log('trying External Storage...');
            return MarvelService.tryExternalStorage<TT>(+id)[0];
          } else {
            return hero;
          }
        }),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} ${this.s} id=${id}`);
        }),
        catchError(this.handleError<TT>(`get${this.S}No404 id=${id}`))
      );
  }

  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   // this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   this.log(`fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  getHero(id: number | string): Observable<TT> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<TT>(url)
      .pipe(
        tap(() => this.log(`fetched ${this.s} (tap) id=${id}`)),
        catchError(this.handleError<TT>(`get${this.S} id=${id}`/*, this.hero*/))
      );
  }

  updateHero(item: TT): Observable<any> {
    return this.http
      .put(this.heroesUrl, item, httpOptions)
      .pipe(
        tap(() => this.log(`updated ${this.s} (tap) id=${item.id}`)),
        catchError(this.handleError<any>('update' + this.S))
      );
  }

  addHero(item: TT): Observable<TT> {
    return this.http
      .post<TT>(this.heroesUrl, item, httpOptions)
      .pipe(
        tap((newItem: TT) => this.log(`added ${this.s} (tap) /w id=${newItem.id}`)),
        catchError(this.handleError<TT>('add' + this.S))
      );
  }

  deleteHero(item: TT | number): Observable<TT> {
    const id = (typeof item === 'number') ? item : item.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete<TT>(url, httpOptions)
      .pipe(
        tap(() => this.log(`deleted ${this.s} (tap) id=${id}`)),
        catchError(this.handleError<TT>('delete' + this.S))
      );
  }

  searchHeroes(term: string): Observable<TT[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<TT[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(() => this.log(`found (tap) ${this.p} matching "${term}"`)),
        catchError(this.handleError<TT[]>('search' + this.P, []))
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

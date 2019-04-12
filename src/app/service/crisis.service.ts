import { Injectable } from '@angular/core';
import { Crisis } from '../model/crisis';
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
export class CrisisService {
  private crisesUrl = 'api/CRISES';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getHeroes(): Observable<Crisis[]> {
    return this.http.get<Crisis[]>(this.crisesUrl)
      .pipe(
        tap(() => this.log('fetched heroes (tap)')),
        catchError(this.handleError<Crisis[]>('getHeroes', []))
      );
  }

  getHeroNo404<Data>(id: number): Observable<Crisis> {
    const url = `${this.crisesUrl}/?id=${id}`;
    console.log(url);
    return this.http.get<Crisis[]>(url)
      .pipe(
        map(crises => crises[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Crisis>(`getHeroNo404 id=${id}`))
      );
  }

  getHero(id: number | string): Observable<Crisis> {
    const url = `${this.crisesUrl}/${id}`;
    return this.http.get<Crisis>(url)
      .pipe(
        tap(() => this.log(`fetched hero (tap) id=${id}`)),
        catchError(this.handleError<Crisis>(`getHero id=${id}`/*, this.hero*/))
      );
  }

  updateHero(crisis: Crisis): Observable<any> {
    return this.http.put(this.crisesUrl, crisis, httpOptions)
      .pipe(
        tap(() => this.log(`updated hero (tap) id=${crisis.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addHero(crisis: Crisis): Observable<Crisis> {
    return this.http.post<Crisis>(this.crisesUrl, crisis, httpOptions)
      .pipe(
        tap((newCrisis: Crisis) => this.log(`added hero (tap) /w id=${newCrisis.id}`)),
        catchError(this.handleError<Crisis>('addHero'))
      );
  }

  deleteHero(crisis: Crisis | number): Observable<Crisis> {
    const id = (typeof crisis === 'number') ? crisis : crisis.id;
    const url = `${this.crisesUrl}/${id}`;
    return this.http.delete<Crisis>(url, httpOptions)
      .pipe(
        tap(() => this.log(`deleted hero (tap) id=${id}`)),
        catchError(this.handleError<Crisis>('deleteHero'))
      );
  }

  searchHeroes(term: string): Observable<Crisis[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Crisis[]>(`${this.crisesUrl}/?name=${term}`)
      .pipe(
        tap(() => this.log(`found (tap) heroes matching "${term}"`)),
        catchError(this.handleError<Crisis[]>('searchHeroes', []))
      );
  }

  private log(message: string) {
    this.messageService.add(`CrisisService: ${message}`);
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

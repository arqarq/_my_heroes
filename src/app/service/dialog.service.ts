import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  static confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Do you want to proceed?');
    return of(confirmation);
  }
}

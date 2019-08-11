import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogServiceModule } from './dialog-service.module';

@Injectable({
  providedIn: DialogServiceModule
})
export class DialogService {
  static confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Do you want to proceed?');
    return of(confirmation);
  }
}

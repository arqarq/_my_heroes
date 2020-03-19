import { Injectable } from '@angular/core';
import { CloudFirebaseService } from '../service';
import { ForServicesModule } from '../service/for-services.module';

const MERGE = {merge: true};

@Injectable({
  providedIn: ForServicesModule
})
export class CloudFirebaseRepository {
  constructor(private cFService: CloudFirebaseService) {
  }

  save(propertyName: string, value: any) {
    return this.cFService.doc.set({[propertyName]: value}, MERGE)
      .then(() => console.log('SAVE success: (' + propertyName + '/' + value + ')'))
      .catch((reason) => console.log('SAVE error: ' + reason));
  }

  generateChangeInDB() {
    this.cFService.doc.set({rand: Math.random()}, MERGE).then(() => {
      this.cFService.tick(true);
    }).catch(() => this.cFService.tick());
  }
}

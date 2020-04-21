import { Injectable } from '@angular/core';
import { CloudFirebaseService } from '../service';
import { ForServicesModule } from '../service/for-services.module';

const MERGE = {merge: true};

@Injectable({providedIn: ForServicesModule})
export class CloudFirebaseRepository {
  constructor(private cFService: CloudFirebaseService) {
  }

  save(propertyName: string, value: any) {
    return this.cFService.doc.set({[propertyName]: value}, MERGE)
      .then(() => console.log('SAVE success: (' + propertyName + '/' + value + ')'))
      .catch((reason) => console.log('SAVE error: ' + reason));
  }

  getDocumentDataAtIndex(docIndex: number) {
    return this.cFService.docs[docIndex].get();
  }

  saveDocumentDataAtIndex(data, docIndex: number) {
    return this.cFService.docs[docIndex].set({formData: data});
  }

  setCollectionAndDocument(collectionName: string, docName: string): number {
    return this.cFService.setCollectionAndDocument(collectionName, docName);
  }

  generateChangeInDB() {
    this.cFService.doc.set({rand: Math.random()}, MERGE).then(() => {
      this.cFService.tick(true);
    }).catch(() => this.cFService.tick());
  }

  generateChangeInDB$() {
    return this.cFService.doc.set({rand: Math.random()}, MERGE);
  }

  checkIfLoggedIn(): boolean {
    return !!this.cFService.getCurrentUser();
  }
}

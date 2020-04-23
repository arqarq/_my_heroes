import { Injectable } from '@angular/core';
import { CloudFirebaseService } from '../service';
import { ForServicesModule } from '../service/for-services.module';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

const MERGE = {merge: true};

@Injectable({providedIn: ForServicesModule})
export class CloudFirebase {
  private docs: AngularFirestoreDocument[] = [];

  constructor(private cFRepository: CloudFirebaseService) {
  }

  save(propertyName: string, value: any) {
    return this.cFRepository.doc.set({[propertyName]: value}, MERGE)
      .then(() => console.log('SAVE success: (' + propertyName + '/' + value + ')'))
      .catch((reason) => console.log('SAVE error: ' + reason));
  }

  getDocumentDataAtIndex(docIndex: number) {
    return this.docs[docIndex].get();
  }

  saveDocumentDataAtIndex(data, docIndex: number) {
    return this.docs[docIndex].set({formData: data});
  }

  setCollectionAndDocument(collectionName: string, docName: string): number {
    const firstNonUndefinedIndex = this.docs.length
    this.docs[firstNonUndefinedIndex] = this.cFRepository.db.collection(collectionName).doc(docName)
    return firstNonUndefinedIndex;
  }

  generateChangeInDB$() {
    return this.cFRepository.doc.set({rand: Math.random()}, MERGE);
  }

  checkIfLoggedIn(): boolean {
    return !!this.cFRepository.getCurrentUser();
  }
}

import { Injectable } from '@angular/core';
import { CloudFirebaseRepository } from './index';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

const MERGE = {merge: true};

@Injectable({providedIn: 'root'})
export class CloudFirebaseService {
  private docs: AngularFirestoreDocument[] = [];

  constructor(private cFRepository: CloudFirebaseRepository) {
  }

  save(propertyName: string, value: any) {
    return this.cFRepository.doc.set({[propertyName]: value}, MERGE)
      .then(() => console.log('SAVE success: (' + propertyName + '/' + value + ')'))
      .catch((reason) => console.log('SAVE error: ' + reason));
  }

  getDocumentDataAtIndex(docIndex: number) {
    return this.docs[docIndex].get()
  }

  deleteDocumentAtIndex(docIndex: number) {
    if (this.docs[docIndex]) {
      return this.docs[docIndex].delete().then(() => {
        this.docs[docIndex] = undefined
      })
    }
    return Promise.reject()
  }

  saveDocumentDataAtIndex(data, docIndex: number) {
    return this.docs[docIndex].set({formData: data});
  }

  setCollectionAndDocument(collectionName: string, docName: string, index): number {
    if (typeof index !== 'number') {
      const firstNonUndefinedIndex = this.docs.length;
      this.docs[firstNonUndefinedIndex] = this.cFRepository.db.collection(collectionName).doc(docName)
      return firstNonUndefinedIndex;
    }
    this.docs[index] = this.cFRepository.db.collection(collectionName).doc(docName)
    return index
  }

  generateChangeInDB$() {
    return this.cFRepository.doc.set({rand: Math.random()}, MERGE);
  }

  checkIfLoggedIn(): boolean {
    return !!this.cFRepository.getCurrentUser();
  }

  checkIfLoggedIn2() {
    return this.cFRepository.checkIfUserLoggedIn()
  }
}

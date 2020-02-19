import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'any'
})
export class CloudFirebaseService {
  private doc: AngularFirestoreDocument;

  constructor(
    private dbAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.dbAuth.auth.signInAnonymously().then(() => {
      this.doc = db.collection('kolekcja').doc('dokument');
    });
  }

  getDataFromDoc(key: string) {
    return this.doc.get()
      .pipe(map((value) => value.get(key)));
  }
}

import { Injectable } from '@angular/core';
import * as admin from 'firebase-admin';
import { serviceAccountObj } from './db-auth';
import DocumentData = FirebaseFirestore.DocumentData;
import DocumentReference = FirebaseFirestore.DocumentReference;

@Injectable({
  providedIn: 'any'
})
export class CloudFirebaseService {
  private doc: DocumentReference<DocumentData>;

  constructor() {
    this.configDB();
  }

  getFieldFromDoc(key: string) {
    return this.doc.get().then((value) => {
      return value.get(key);
    });
  }

  private configDB() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountObj),
      databaseURL: 'https://d00af17f5d630b7296f102d.firebaseio.com'
    });
    const db = admin.firestore();
    this.doc = db.collection('kolekcja').doc('dokument');
  }
}

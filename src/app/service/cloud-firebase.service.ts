import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ForServicesModule } from './for-services.module';

@Injectable({
  providedIn: ForServicesModule
})
export class CloudFirebaseService {
  doc: AngularFirestoreDocument;
  docRefNotChanged: AngularFirestoreDocument;
  private baseUrl = 'https://us-central1-d00af17f5d630b7296f102d.cloudfunctions.net/createToken';
  private uid = 'qazqaz';
  private s1 = new Subscription();

  constructor(
    private dbAuth: AngularFireAuth,
    private db: AngularFirestore,
    private httpClient: HttpClient
  ) {
    this.login();
    this.dbAuth.auth.onAuthStateChanged((user) => {
      this.doc = db.collection('kolekcja').doc('dokument');
      console.log('--- db: doc set, onAuthStateChanged, user anonymous?', user?.isAnonymous);
    });
  }

  getAuthStateObserver() {
    return this.dbAuth.authState;
  }

  getDataObj() {
    return new Observable((subscriber) => {
      subscriber.next(this.doc);
      const timeout = setTimeout(() => {
        subscriber.next(null);
        subscriber.complete();
        clearTimeout(timeout);
      }, 1000000);
    });
  }

  getCurrentUser() {
    if (this.dbAuth.auth.currentUser) {
      const obj = JSON.parse(JSON.stringify(this.dbAuth.auth.currentUser));
      return {lastLoginAt: obj.lastLoginAt, createdAt: obj.createdAt};
    }
    return null;
  }

  getDataFromDoc(key: string) {
    return this.doc.snapshotChanges().pipe(map((value) => {
      const temp = value.payload.get(key);
      console.log('--- db, getData1:', temp);
      return temp as string;
    }));
  }

  getDataFromDoc2(key: string) {
    return this.docRefNotChanged.snapshotChanges().pipe(map((value) => {
      const temp = value.payload.get(key);
      console.log('--- db, getData2:', temp);
      return temp as string;
    }));
  }

  logout() {
    this.dbAuth.auth.signOut().then((function a() {
      this.s1.unsubscribe();
      console.log('--- db: signed out', 'subscriptions_unsubscribed (closed)?', this.s1.closed);
    }).bind(this));
  }

  login() {
    this.s1 = this.generateToken(this.uid).subscribe((value) => {
      this.dbAuth.auth.signInWithCustomToken(value).then((value2) => {
        console.log('--- db*: signed in, creationTime:', value2.user.metadata.creationTime + ', lastSignInTime:',
          value2.user.metadata.lastSignInTime);
        this.docRefNotChanged = this.db.collection('kolekcja').doc('dokument');
        console.log('--- db*: docRefNotChanged set, user anonymous?', value2.user.isAnonymous);
      }).catch((reason) => {
        console.log('--- db*:', reason.message);
      });
    });
  }

  private generateToken(uid: string) {
    const url = `${this.baseUrl}?uid=${uid}`;
    return this.httpClient.get(url, {responseType: 'text'});
  }
}

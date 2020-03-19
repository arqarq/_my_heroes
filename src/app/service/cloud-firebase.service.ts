import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ForServicesModule } from './for-services.module';

interface TockType {
  a?: boolean;
  b?: boolean;
}

@Injectable({
  providedIn: ForServicesModule
})
export class CloudFirebaseService {
  key: string;
  tock: TockType = {};
  doc: AngularFirestoreDocument;
  docRefNotChanged: AngularFirestoreDocument;
  docTest$: Observable<string>;
  private baseUrl = 'https://us-central1-d00af17f5d630b7296f102d.cloudfunctions.net/createToken';
  private uid = 'qazqaz';
  private s1;

  constructor(
    public dbAuth: AngularFireAuth,
    private db: AngularFirestore,
    private http: HttpClient
  ) {
    this.login();
    this.dbAuth.auth.onAuthStateChanged((user) => {
      this.doc = db.collection('kolekcja').doc('dokument');
      if (this.dbAuth.auth.currentUser) {
        this.docTest$ = db
          .collection('kolekcja')
          .doc('dokument')
          .valueChanges()
          .pipe(map((value) => value[this.key]));
      } else {
        this.docTest$ = of('NULL_C');
      }
      console.log('--- db: doc set, onAuthStateChanged, user?', user ? true : null);
    });
  }

  getCurrentUser() {
    if (this.dbAuth.auth.currentUser) {
      const obj = JSON.parse(JSON.stringify(this.dbAuth.auth.currentUser));
      return {lastLoginAt: obj.lastLoginAt, createdAt: obj.createdAt};
    }
    return null;
  }

  getDataFromDoc() {
    return this.dbAuth.authState.pipe(switchMap((value) => {
      if (value) {
        return this.doc.snapshotChanges().pipe(map((value2) => {
          const temp = value2.payload.get(this.key);
          console.log('--- db, getData1:', temp);
          return temp as string;
        }));
      }
      return of('NULL_A');
    }));
  }

  getDataFromDoc2(key: string) {
    return this.dbAuth.authState.pipe(switchMap((value) => {
      return value ?
        this.docRefNotChanged.snapshotChanges().pipe(map((value2) => {
          const temp = value2.payload.get(key);
          console.log('--- db, getData2:', temp);
          return temp as string;
        })) :
        of('NULL_B');
    }));
  }

  logout() {
    this.dbAuth.auth.signOut().then((function a() {
      // this.s1.unsubscribe();
      console.log('--- db: signed out, subscription_unsubscribed (closed)?', this.s1.closed);
    }).bind(this));
  }

  login() {
    this.s1 = this.generateToken(this.uid).subscribe((value) => {
      this.dbAuth.auth.signInWithCustomToken(value).then((value2) => {
        console.log('--- db*: signed in, creationTime:', value2.user.metadata.creationTime + ', lastSignInTime:',
          value2.user.metadata.lastSignInTime);
        this.docRefNotChanged = this.db.collection('kolekcja').doc('dokument');
        console.log('--- db*: docRefNotChanged set, user?', value2.user ? true : null);
      }).catch((reason) => {
        console.log('--- db*:', reason.message);
      });
    });
  }

  tick(success?: boolean) {
    this.tock.b = success;
    this.tock.a = true;
    const timeout = setTimeout(() => {
      this.tock.a = false;
      clearTimeout(timeout);
    }, 1000);
  }

  private generateToken(uid: string) {
    const url = this.baseUrl + `?uid=${uid}`;
    return this.http.get(url, {responseType: 'text'});
  }
}

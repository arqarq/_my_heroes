import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, switchMap, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CloudFirebaseRepository {
  key: string
  doc: AngularFirestoreDocument
  docRefNotChanged: AngularFirestoreDocument
  docTest$: Observable<string>
  private currentUser = new BehaviorSubject(null)
  private baseUrl = 'https://us-central1-d00af17f5d630b7296f102d.cloudfunctions.net/createToken'
  private uid = 'qazqaz'
  private s1
  private s2 = new Subscription()

  constructor(
    public dbAuth: AngularFireAuth,
    public db: AngularFirestore,
    private http: HttpClient
  ) {
    this.login();
    this.s2.add(this.dbAuth.authState.subscribe((user) => {
      if (user) {
        this.setFirstDocument();
        this.docTest$ = db.collection('kolekcja').doc('dokument')
          .valueChanges()
          .pipe(map((value) => value[this.key]));
        console.log('--- db**: doc refs set, onAuthStateChanged, user?', user ? true : null)
        return
      }
      this.docTest$ = of('NULL_C')
      console.log('--- db**: doc refs not set, onAuthStateChanged, user?', user ? true : null);
    }));
    this.s2.add(this.dbAuth.user.subscribe((user) => this.currentUser.next(user)))
  }

  getCurrentUser() {
    const cU = this.currentUser.getValue();

    if (cU) {
      const obj = JSON.parse(JSON.stringify(cU));
      return {lastLoginAt: obj.lastLoginAt, createdAt: obj.createdAt};
    }
    return null
  }

  checkIfUserLoggedIn(): Observable<boolean> {
    return this.currentUser.pipe(take(1), map((value) => !!value))
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

  getDataFromDocRefNotChanged(key: string) {
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
    this.dbAuth.signOut().then((function a() {
      // this.s1.unsubscribe();
      console.log('--- db: signed out, subscription_unsubscribed (closed)?', this.s1.closed);
    }).bind(this));
  }

  login() {
    this.s1 = this.generateToken(this.uid).subscribe((value) => {
      this.dbAuth.signInWithCustomToken(value).then((value2) => {
        console.log('--- db*: signed in, creationTime:', value2.user.metadata.creationTime + ', lastSignInTime:',
          value2.user.metadata.lastSignInTime);
        this.docRefNotChanged = this.db.collection('kolekcja').doc('dokument');
        console.log('--- db*: docRefNotChanged set, user?', value2.user ? true : null);
      }).catch((reason) => {
        console.log('--- db*:', reason.message);
      });
    });
  }

  private setFirstDocument() {
    this.doc = this.db.collection('kolekcja').doc('dokument');
  }

  private generateToken(uid: string) {
    const url = this.baseUrl + `?uid=${uid}`;
    return this.http.get(url, {responseType: 'text'});
  }
}

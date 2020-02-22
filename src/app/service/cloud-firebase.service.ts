import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class CloudFirebaseService implements OnDestroy {
  private s1 = new Subscription();
  private doc: AngularFirestoreDocument;
  private baseUrl = 'https://us-central1-d00af17f5d630b7296f102d.cloudfunctions.net/createToken';
  private uid = 'qazqaz';

  constructor(
    private dbAuth: AngularFireAuth,
    private db: AngularFirestore,
    private httpClient: HttpClient
  ) {
    this.s1 = this.generateToken(this.uid).subscribe((value) => {
      this.dbAuth.auth.signInWithCustomToken(value).then((value2) => {
        console.log('--- db:', value2);
        this.dbAuth.auth.onAuthStateChanged(() => {
          this.doc = db.collection('kolekcja').doc('dokument');
        });
      }).catch((reason) => {
        console.log('--- db:', reason.message);
      });
    });
  }

  getDataFromDoc(key: string) {
    return this.doc ?
      this.doc.snapshotChanges().pipe(map((value) => {
        return value.payload.get(key) as string;
      })) :
      of(`<problem z db>`);
  }

  ngOnDestroy(): void {
    this.dbAuth.auth.signOut().then((function a() {
      this.s1.unsubscribe();
      console.log('--- db: signed out');
    }).bind(this));
  }

  private generateToken(uid: string) {
    const url = `${this.baseUrl}?uid=${uid}`;
    return this.httpClient.get(url, {responseType: 'text'});
  }
}

const serviceAccountObj = require('./db-auth.js');
const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);
// admin.initializeApp({credential: admin.credential.applicationDefault()});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountObj),
  databaseURL: 'https://d00af17f5d630b7296f102d.firebaseio.com'
});
const db = admin.firestore();
const doc = db.collection('kolekcja').doc('dokument');
doc.get().then((value) => console.log('pole:', value.get('pole')));

let data = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA'
};
const setDoc = db.collection('a').doc('LA');
setDoc.set(data).then((value) => {
  console.log('WriteResult:', value);
  setDoc.get().then((value) => console.log('data set:', value.data()))
});
data = [
  {content: 'A', blob: true, L: '50%', T: '50%'},
  {content: 'B', blob: false, L: '50%', T: '50%'},
  {content: 'C', blob: false, L: '50%', T: '50%'},
  {content: 'D', blob: true, L: '50%', T: '50%'},
  {content: 'E', blob: false, L: '50%', T: '50%'},
  {content: 'F', blob: true, L: '50%', T: '50%'},
  {content: 'G', blob: false, L: '50%', T: '50%'},
  {content: 'H', blob: true, L: '50%', T: '50%'},
  {content: 'I', blob: false, L: '50%', T: '50%'},
  {content: 'J', blob: false, L: '50%', T: '50%'},
  {content: 'K', blob: true, L: '50%', T: '50%'},
  {content: 'L', blob: true, L: '50%', T: '50%'},
  {content: 'M', blob: true, L: '50%', T: '50%'},
  {content: 'N', blob: false, L: '50%', T: '50%'},
  {content: 'O', blob: false, L: '50%', T: '50%'},
  {content: 'P', blob: true, L: '50%', T: '50%'},
  {content: 'Q', blob: true, L: '50%', T: '50%'},
  {content: 'R', blob: false, L: '50%', T: '50%'},
  {content: 'S', blob: true, L: '50%', T: '50%'},
  {content: 'T', blob: true, L: '50%', T: '50%'},
  {content: 'U', blob: false, L: '50%', T: '50%'},
  {content: 'W', blob: true, L: '50%', T: '50%'},
  {content: 'X', blob: true, L: '50%', T: '50%'},
  {content: 'Y', blob: false, L: '50%', T: '50%'},
  {content: 'Z', blob: true, L: '50%', T: '50%'}
];
doc.set({test: data, test2: null, test3: false}, {merge: true}).then(() => {
  doc.get().then((value) => console.log(value.data()))
});

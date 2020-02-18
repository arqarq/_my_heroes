const admin = require('firebase-admin');
// const serviceAccount = require('d00af17f5d630b7296f102d-firebase-adminsdk-fmgzc-3d46bee10a');
const serviceAccountObj = {
  "type": "service_account",
  "project_id": "d00af17f5d630b7296f102d",
  "private_key_id": "3d46bee10a7638444f469a27fe11df817f471f7d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEJ5P53UyIJH9e\ndBYmVlz0eHGU5juAHmOgImwI2qL8PWkovB6Q3x1FZs9hUElJwOcZRziZ6ZeRp++V\ngoHllalwV1eFgGWwCF2IjN4zbnjYtAoRXwTgsvoBH4KwVjqFLjV67Z1YvSLwSG8H\nZYnbxshe9fuBOmfrlqezrHQ49xEaMbFF8o1PPYDOhfWcnSI0U+i9ETZGsDroZw0H\nQ5AuTon6wEzizLvJVVCSQ8DJepH/zcWoJIu7pCC1LgNq0xX6eYXQjbM/BeKaZPrL\npqMYbqhnawnxRew2KT84OfHDF+6Um6uY8ey7I44Lun7sZxLuKj0bSgQpZefHXnbJ\nCRMHP+bHAgMBAAECggEAFjrzYZ1GRST4bQ30TK1Q+kEu2NSBkx2JO5FrHlMY/EPs\nHQ+6LxT6I5lpO1AhXi3HLcLik/Q4l0Cpvbn9WrWWxFfsYAGTL1tjWPcOClTPdqUW\nLFh7xwjBnfWiQWB5tV+X9Ac7OTQGN6ZzNCq6cEvw/WzHRM1dEFgR8sztRwoecryn\n/7za20Q98bGLa43cgejxejh/GVrcY65UF4VuZwWmiB5FURW78zxP+p9nC0B8Vf4R\n4MaR2i2cqpM3MLJqQYAl8N9FlZoedbYBZaSW2s56nPuafkOXZ6LM03piooheY8Qc\nxajwm3HT+FwSgrhZ/Sg1jd0R5TKyrjzR4Ewv+lfEEQKBgQD04QX9sWZplVFVHAGW\nZaNJ8YZVpeNaEJa2x4aLPOIi+/lzwsJKrnB4wxYrMoYK+OY+PwqBi1BW03+aiKkB\nGLd4hqAqKzAoLDC+Vdd4phwmLwIwrGWr7QPwTBO8Fv/kXCwhgDsbz4H3Uqy5VqRX\ng64SJrqlYWh5r/+jHGlNnH8cUwKBgQDNEBUHMNzcyso+2mh8iOavpNkeYCn+pmiw\nrF9opxwzasrjiJQLpVn3iG0zD0MghxvU7svejObjirCfqp3hvD5iFs45MrpQKYd4\nj24uQkB9pKzh2C+s1p2Jh70gYsJGyUu+bPwtlAX6R+hhGNgxOBZH7aUjjqORCCcx\nV0IInCRdPQKBgQCR6vSy817fU4affIzFndLrYOx3ZN5Q8MmeKM7XcXQe/J7siAVW\nkxOaIkW3f+e36hDozo/oGafJ1UWYRA7RBHVvcGlIN2v+xDZXdLdswS7M4f4gGtqK\n1DUgn3SzA9F/thzl6Y9PRxte0Pjzh9lt/J1hW4qkuaKTwHhILcnh4Xss2QKBgQCp\n4kbpfCudp0tCIwMpGOm0XeeZ6KUh2I8mvscUFk2gszp+oim0NDqCfb2p7Vz5V7VR\nBLxVFXo6zC1jOaAu4Rr1fFtAu6vquV0IHhtzq2NuM70eJVHp6Kr+wzuF1wuIRT/A\n9N0+jUEehfAYcNK6g/LBiDmlaYhMoOqHT/je1SyzKQKBgCUkqB0t3KHw7p65ft5Z\n0NCbbA9ZE3umVWttfJjbfjxXDvwTEA3xWBp8ppk3ycyTG80s0gPto4BxqgTRvwWI\nCWr2bKJqMd0twEzcd+NpCJykcpSX3j7I0dBAsLlqrQIRe1JQM7hmCw9jNvntDZFV\nHbcSqt9ssjJNe9xbK+OV2dC+\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fmgzc@d00af17f5d630b7296f102d.iam.gserviceaccount.com",
  "client_id": "117183986930516358557",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fmgzc%40d00af17f5d630b7296f102d.iam.gserviceaccount.com"
};
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
setDoc.set({test: data, test2: null}, {merge: true});

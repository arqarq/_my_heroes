import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { AuthService } from './auth';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
admin.initializeApp();
export const createToken = functions.https.onRequest((req, resp) => {
  resp.set('Access-Control-Allow-Origin', '*');
  const authService = new AuthService(admin);
  authService.createToken(req.query['uid'])
    .then((value: any) => resp.send(value))
    .catch((reason: any) => console.log('Error creating custom token:', reason));
});

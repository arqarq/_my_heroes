"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const auth_1 = require("./auth");
const express = require('express');
// Constants
const PORT = 8888;
const HOST = '0.0.0.0';
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
admin.initializeApp();
exports.createToken = functions.https.onRequest((req, resp) => {
    resp.set('Access-Control-Allow-Origin', '*');
    const authService = new auth_1.AuthService(admin);
    authService.createToken(req.query['uid'])
        .then((value) => resp.send(value))
        .catch((reason) => console.log('Error creating custom token:', reason));
});
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

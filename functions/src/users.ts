import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const createUser = functions.auth.user().onCreate(async (user) => {
  const db = admin.firestore();

  const { uid, email, displayName, emailVerified, photoURL } = user;
  await db.collection('users').doc(user.uid).set({
    uid,
    email,
    displayName,
    emailVerified,
    photoURL,
    onboarded: false,
    monthlySavingsGoal: 250,
  });
});

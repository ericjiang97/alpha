import * as firebase from 'firebase';
import 'firebase/auth';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/**
 * Add Scopes (Optional)
 * Example:
 * provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
 */

/**
 * Additional Custom OAuth Parameters
 * See https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider?authuser=0#setCustomParameters
 */

googleAuthProvider.setCustomParameters({
  login_hint: 'user@example.com',
});

export default googleAuthProvider;

import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD0nrnfC6LagxAIpM2F5w2xVymVv5ZLtg0',
  authDomain: 'instaclone-1f7cc.firebaseapp.com',
  projectId: 'instaclone-1f7cc',
  storageBucket: 'instaclone-1f7cc.appspot.com',
  messagingSenderId: '1070964147330',
  appId: '1:1070964147330:web:76573798dd8aeab21ca09b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const imageStorage = firebase.storage();

export { imageStorage };

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAyOlSGb1v1N0Ywdfa8VU8ClrK5zliufvM",
    authDomain: "monsters-rolodex-site.firebaseapp.com",
    projectId: "monsters-rolodex-site",
    storageBucket: "monsters-rolodex-site.appspot.com",
    messagingSenderId: "1072999955136",
    appId: "1:1072999955136:web:037eb6fbf8704765ce0b25"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }
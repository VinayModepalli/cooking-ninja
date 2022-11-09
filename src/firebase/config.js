import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5RTmv0vncpMTEdGCM9_71_1NnI5prww8",
    authDomain: "cooking-ninja-app-fc1c2.firebaseapp.com",
    projectId: "cooking-ninja-app-fc1c2",
    storageBucket: "cooking-ninja-app-fc1c2.appspot.com",
    messagingSenderId: "978012131778",
    appId: "1:978012131778:web:442bcb5a4748604ff7065b"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }
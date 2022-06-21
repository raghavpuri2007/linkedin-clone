import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAn62xivqEjm-htdD3WzMPZ08AD00bkxmY",
    authDomain: "linkedin-clone-1e631.firebaseapp.com",
    projectId: "linkedin-clone-1e631",
    storageBucket: "linkedin-clone-1e631.appspot.com",
    messagingSenderId: "102665507950",
    appId: "1:102665507950:web:445f2805f248513175027f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
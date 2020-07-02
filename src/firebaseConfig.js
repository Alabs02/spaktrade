import firebase from 'firebase'
import 'firebase/firestore'


// Initialize firebase

const config = {
    apiKey: "AIzaSyAwezY8LCWuJ1cPSEtxSmQMPKFbQscpWlc",
    authDomain: "spaktrade-9aaa9.firebaseapp.com",
    databaseURL: "https://spaktrade-9aaa9.firebaseio.com",
    projectId: "spaktrade-9aaa9",
    storageBucket: "spaktrade-9aaa9.appspot.com"
};

firebase.initializeApp(config)

// Firebase Utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Firebase collections

const usersCollection = db.collection('users')
const transactCollection = db.collection('transactions')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    transactCollection
}
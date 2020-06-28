import firebase from 'firebase';
// Initialize firebase
var config = {
    apiKey: "AIzaSyAwezY8LCWuJ1cPSEtxSmQMPKFbQscpWlc",
    authDomain: "spaktrade-9aaa9.firebaseapp.com",
    databaseURL: "https://spaktrade-9aaa9.firebaseio.com",
    projectId: "spaktrade-9aaa9",
    storageBucket: "spaktrade-9aaa9.appspot.com"
};

export default firebase.initializeApp(config);
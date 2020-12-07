import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAx4EIh9Xogl1Sql9Qz1h8iT0L4tdkQ1dI",
    authDomain: "imessage-clone-yt-1e62d.firebaseapp.com",
    projectId: "imessage-clone-yt-1e62d",
    storageBucket: "imessage-clone-yt-1e62d.appspot.com",
    messagingSenderId: "1089373960463",
    appId: "1:1089373960463:web:b7adc79b945d9830b1e67a",
    measurementId: "G-M7R7R3E4JC"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4kfUUEhw3eZ28GQu1K9rn0nlrFBcHDKE",
    authDomain: "whatsapp-79a10.firebaseapp.com",
    projectId: "whatsapp-79a10",
    storageBucket: "whatsapp-79a10.appspot.com",
    messagingSenderId: "315040451945",
    appId: "1:315040451945:web:cf40e9955375504f7981f8",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db;














// ////////////////////////////////////////////////////////////////////////////////////////////

// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// //import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//     apiKey: "AIzaSyC4kfUUEhw3eZ28GQu1K9rn0nlrFBcHDKE",
//     authDomain: "whatsapp-79a10.firebaseapp.com",
//     projectId: "whatsapp-79a10",
//     storageBucket: "whatsapp-79a10.appspot.com",
//     messagingSenderId: "315040451945",
//     appId: "1:315040451945:web:cf40e9955375504f7981f8",
//   };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);
// const provider = new GoogleAuthProvider()

// export { db, auth, storage, provider };



///////////////////////////////////////////////////////////////////////////////////////////////////

// import firebase from "firebase";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// //GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// const firebaseConfig = {
//   apiKey: "AIzaSyC4kfUUEhw3eZ28GQu1K9rn0nlrFBcHDKE",
//   authDomain: "whatsapp-79a10.firebaseapp.com",
//   projectId: "whatsapp-79a10",
//   storageBucket: "whatsapp-79a10.appspot.com",
//   messagingSenderId: "315040451945",
//   appId: "1:315040451945:web:cf40e9955375504f7981f8",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

// // import firebase from "firebase";

// // // GMO firebase data
// const firebaseConfig = {
//   apiKey: "AIzaSyC4kfUUEhw3eZ28GQu1K9rn0nlrFBcHDKE",
//   authDomain: "whatsapp-79a10.firebaseapp.com",
//   projectId: "whatsapp-79a10",
//   storageBucket: "whatsapp-79a10.appspot.com",
//   messagingSenderId: "315040451945",
//   appId: "1:315040451945:web:cf40e9955375504f7981f8",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

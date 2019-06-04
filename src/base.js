import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlH5wK1Q81_8OPzZqnQqqbO9vSc8NmE5U",
    authDomain: "catch-of-the-day-fede.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-fede.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

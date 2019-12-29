import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBA8kYjWO7PZzGlca2TADtQYyU8mqXVK68",
    authDomain: "evento-3d4eb.firebaseapp.com",
    databaseURL: "https://evento-3d4eb.firebaseio.com",
    projectId: "evento-3d4eb",
    storageBucket: "evento-3d4eb.appspot.com",
    messagingSenderId: "800512589659",
    appId: "1:800512589659:web:299c35b3560c3a836be47e"
  };

export default firebase.initializeApp(firebaseConfig);
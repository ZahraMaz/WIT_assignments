var initializeApp = require('firebase/app')
    
    const firebaseConfig = {
      apiKey: "AIzaSyCtAAhtkFXZald-dzLC8HSEzzTG1Ic0eO0",
      authDomain: "login-page-bd735.firebaseapp.com",
      databaseURL: "https://login-page-bd735-default-rtdb.firebaseio.com",
      projectId: "login-page-bd735",
      storageBucket: "login-page-bd735.appspot.com",
      messagingSenderId: "441688971219",
      appId: "1:441688971219:web:9a777a7477156af70ac126",
      measurementId: "G-7GTXM5QH3R",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
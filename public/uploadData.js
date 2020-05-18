const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://animeapi-10ee6.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");
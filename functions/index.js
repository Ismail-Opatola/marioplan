const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, Zombies!");
});






// Notes:

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello, Zombies!");
// });

// To Deploy only functions and exclude dist :enter CLI
// $ firebase deploy --only functions

// CLI stdout //
// unction URL (helloWorld): https://us-central1-mario-plan-2dd0c.cloudfunctions.net/helloWorld

// +  Deploy complete!

// Please note that it can take up to 30 seconds for your updated functions to propagate.
// Project Console: https://console.firebase.google.com/project/mario-plan-2dd0c/overview

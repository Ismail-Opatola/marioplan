const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, Zombies!");
});

//create notifications collection in firestore
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc))
    .catch(err => console.log('notification error', err));
};

// create a notification object, pass to notifications collection on creation of a new project
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);

    // Next:
    // To Deploy only functions and exclude dist :enter CLI
    // $ firebase deploy --only functions
    // go to firebase to see the new notifications collection added to storage, click on Functions-dahsboard..... go create a new project on site and check Firebase Functions-Logs to see if our func was evoked
  });

// create new user notification usining the auth service
exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore()
    .collection("users")
    .doc(user.uid) // using the user id from auth to ref the user data
    .get() // retrieves the doc for that user , get() is async
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
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

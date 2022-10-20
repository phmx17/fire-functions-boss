const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  const random = Math.round(Math.random() *100)
  // response.send("Hello from Firebase!");
  response.send("random number: ");
});

exports.helloAnja = functions.https.onRequest((request, response) => {
  const randomNumber = Math.round(Math.random() * 100)
  response.send(randomNumber.toString());
});

exports.toYT = functions.https.onRequest((req, res) => {
  res.redirect('https://youtube.com')
})

// callable function (not a request) and the name of it is 'onCall'
// later there will be a reference created in app.js to this function
exports.onCall = functions.https.onCall((data, context) => {
  return `hey there ${data.name}`
})
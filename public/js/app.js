  // const { initializeApp } = require('firebase/app')
  // const { getFunctions } = require( 'firebase/functions')
    // import { getAuth } from "firebase/auth"
    // import { getFirestore } from "firebase/firestore"
    
    // See: https://firebase.google.com/docs/web/learn-more#config-object
    // const firebaseConfig = require('../../firebaseConfig.json')

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const functions = getFunctions(app);
    // const auth = getAuth(app);
    // Initialize Cloud Firestore and get a reference to the service
    // const db = getFirestore(app); 


const requestModal = document.querySelector('.new-request')
const requestLink = document.querySelector('.add-request')

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open')
})

requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open')
  }
})

const button = document.querySelector('.call')
button.addEventListener('click', () => {
  // create a reference to the 'onCall' function
  const onCall =  firebase.functions().httpsCallable('onCall')
  // invoke the function - kewl and it returns a promise!
  onCall({name: "anya taylor joy"}).then((result) => console.log("this is what comes back from the onCall function: ", result.data))
})
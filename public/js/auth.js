// setup interaction with front end

const authSwitchLinks = document.querySelectorAll('.switch')  // returns array
const authModals = document.querySelectorAll('.auth .modal')
const authWrapper = document.querySelector('.auth') // returns object, even if more that one class targeted
const registerForm = document.querySelector('.register')

// toggle auth modals - nifty stuff
authSwitchLinks.forEach(link => {
  link.addEventListener('click', () => {
    authModals.forEach(modal => modal.classList.toggle('active'))
  })
})

// register form
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = registerForm.email.value
  const password = registerForm.password.value

  firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
    console.log("registered user: ", user)
    registerForm.reset()
  })
  .catch((err) => {
    registerForm.querySelector('.error').textContent = error.message
  })
})
 
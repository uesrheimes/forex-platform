import app from "./firebase.js";

import {
  getAuth,
  createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("signupBtn")
.addEventListener("click", () => {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

createUserWithEmailAndPassword(
  auth,
  email,
  password
)

.then((userCredential) => {

alert("Account Created Successfully!");

})

.catch((error) => {

alert(error.message);

});

});

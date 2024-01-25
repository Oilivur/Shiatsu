// admin.js
import { auth } from "./firebase-config.js";
import { get, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

function adminLogin() {
    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
  
        // Set isAdmin to true in localStorage
        localStorage.setItem("isAdmin", "true");
  
        // Redirect to regstr.html
        window.location.href = "regstr.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login failed:", errorMessage);
        // Handle login failure, display an error message, etc.
      });
}

document.addEventListener('DOMContentLoaded', function() {
    // Bind the click event
    document.getElementById('loginButton').addEventListener('click', adminLogin);
});

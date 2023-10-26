// Check if the user is already logged in (you can use localStorage)
const userIsLoggedIn = !!localStorage.getItem("user");

const loginForm = document.querySelector(".login-form");

if (userIsLoggedIn) {
  // Display a message or redirect to the booking page
} else {
  

  // Handle login and account creation using local storage
  document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Check if the login is valid and store user data in local storage
    // Redirect to the booking page if successful
  });

  
}

// This code handles login and account creation.

// If the user is already logged in, redirect to the booking page
if (localStorage.getItem("user")) {
  window.location.href = "pages/booking.html";
}

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the login is valid (You should implement your validation logic here)
  const user =
    ""; /* Retrieve user data from your data source based on username and password */

  if (user) {
    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to the booking page
    window.location.href = "pages/booking.html";
  } else {
    // Handle invalid login (e.g., display an error message)
  }
});


window.onload = function() {
  console.log(document.querySelector('#account-form'))
  document.querySelector("#account-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    // Create a new account (You should implement your account creation logic here)
    const newUser = { username: newUsername, password: newPassword };

    // Store the new account data in local storage
    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect to the booking page
    window.location.href = "pages/booking.html";
  });
}


// Check if the user is logged in (you can use localStorage)
const userIsLoggedIn = !!localStorage.getItem("user");

const bookingForm = document.querySelector(".booking-form");

if (userIsLoggedIn) {
  // Display the room reservation form
  bookingForm.innerHTML = `
        <h2>Room Reservation</h2>
        <form id="reservation-form">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="check-in">Check-In Date:</label>
            <input type="date" id="check-in" required>
            <label for="check-out">Check-Out Date:</label>
            <input type="date" id="check-out" required>
            <button type="submit">Reserve</button>
        </form>
    `;

  // Handle room reservation using the data entered
  document
    .getElementById("reservation-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const checkIn = document.getElementById("check-in").value;
      const checkOut = document.getElementById("check-out").value;

      // Store booking information in local storage (or your database)
      const bookingData = {
        roomId: 1, // Replace with the actual room ID
        name,
        email,
        checkIn,
        checkOut,
      };

      // Save booking data to local storage
      localStorage.setItem("bookingData", JSON.stringify(bookingData));

      // Redirect to a confirmation page or provide a success message
      window.location.href = "../index.html"; // Redirect to the home page
    });
} else {
  // Redirect the user to the login page
  window.location.href = "../login.html";
}

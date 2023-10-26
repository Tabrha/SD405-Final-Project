// Retrieve available rooms data from an API or an array
const roomsData = [
    { id: 1, name: "Standard Room", price: 100 },
    { id: 2, name: "Deluxe Room", price: 150 },
    { id: 3, name: "Suite", price: 250 },
    { id: 3, name: "Standard", price: 150 },
    { id: 3, name: "Formal", price: 250 },
    { id: 3, name: "Special", price: 350 },
    { id: 3, name: "Basic", price: 100 },
    { id: 3, name: "Skyline", price: 250 },
    // Add more rooms as needed
];


// Generate room cards dynamically
const roomList = document.querySelector(".room-list");

roomsData.forEach(room => {
    const roomCard = document.createElement("div");
    roomCard.classList.add("room-card");
    roomCard.innerHTML = `
        <h2>${room.name}</h2>
        <p>Price: $${room.price}/night</p>
        <button class="reserve-button" data-room-id="${room.id}">Reserve</button>
    `;
    roomList.appendChild(roomCard);
});

// Handle room reservation
// This code will handle room reservation when a user clicks the "Reserve" button on the room listing page.
roomList.addEventListener("click", event => {
    if (event.target.classList.contains("reserve-button")) {
        const roomId = event.target.getAttribute("data-room-id");

        // Check if the user is logged in
        if (localStorage.getItem("user")) {
            // Redirect to the booking page with the room ID
            window.location.href = `../booking.html?room=${roomId}`;
        } else {
            // Redirect to the login page
            window.location.href = "../../login.html";
        }
    }
});


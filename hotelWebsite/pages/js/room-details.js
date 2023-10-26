// Retrieve room details from an API or an array
const roomDetailsData = [
    { id: 1, name: "Standard Room", description: "A cozy room with a view.", price: 100 },
    { id: 2, name: "Deluxe Room", description: "Spacious and luxurious.", price: 150 },
    { id: 3, name: "Suite", description: "A suite fit for royalty.", price: 250 },
    // Add more room details as needed
];



// Get the room ID from the URL or another source
const roomId = 1; // Example room ID, replace with the actual ID source

// Find the room details for the given ID
const room = roomDetailsData.find(room => room.id === roomId);

const roomDetails = document.querySelector(".room-details");

roomDetails.innerHTML = `
    <h2>${room.name}</h2>
    <p>${room.description}</p>
    <p>Price: $${room.price}/night</p>
    <button id="reserve-button">Reserve</button>
`;

// Handle room reservation
// This code will handle room reservation from the room details page.
document.getElementById("reserve-button").addEventListener("click", () => {
    // Check if the user is logged in
    if (localStorage.getItem("user")) {
        // Redirect to the booking page with the room ID
        const roomId = /* Get the room ID from your data source */
        window.location.href = `../booking.html?room=${roomId}`;
    } else {
        // Redirect to the login page
        window.location.href = "../../login.html";
    }
});


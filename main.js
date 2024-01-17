import { database } from "./firebase-config.js";
import { ref, push, set, get, runTransaction } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is an admin
    const isAdmin = localStorage.getItem("isAdmin") === "true";
  
    // Get the "Lisa aeg" button element
    const addEventButton = document.getElementById("addEventButton");
  
    if (isAdmin && addEventButton) {
      // Admin-specific logic or content
      console.log("User is an admin");
  
      // Show the button for admins
      addEventButton.style.display = "block";
  
      // Get the modal and close button elements
      const modal = document.getElementById("myModal");
      const closeButton = document.querySelector(".close");
  
      // Add event listener to the "Lisa aeg" button
      addEventButton.addEventListener("click", function() {
        // Show the modal when the button is clicked
        modal.style.display = "block";
      });
  
      // Add event listener to the close button to close the modal
      closeButton.addEventListener("click", function() {
        modal.style.display = "none";
      });
  
      // Add event listener to the modal background to close the modal
      window.addEventListener("click", function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
  
    // Handle form submission
    const submitButton = document.getElementById("submitEvent");
    submitButton.addEventListener("click", function() {
        // Get values from the form
        const eventDate = document.getElementById("eventDate").value;
        const eventTime = document.getElementById("eventTime").value;
        const availableSlots = document.getElementById("availableSlots").value;
        const eventAddress = document.getElementById("eventAddress").value;
          // Validate inputs (you can add more validation if needed)
        if (!eventDate || !eventTime || !availableSlots || !eventAddress) {
            alert("Please fill in all fields");
            return;
        }
    
        // Prepare the data for the new event
        const eventsRef = ref(database, 'events');
        const eventKey = push(eventsRef).key;
        const eventData = {
          date: eventDate,
          time: eventTime,
          slots: availableSlots,
          address: eventAddress,
          registeredPeople: 0, // Initialize registeredPeople to 0
        };
    
        // Save the event to the database
        set(ref(database, `events/${eventKey}`), eventData);

        // Close the modal after handling the form
        modal.style.display = "none";
    });
    } else {
      // Regular user logic or content
      console.log("User is not an admin");
    }
});



// Modify your existing code to fetch events from Firebase
const regbox = document.querySelector(".regbox");

// Assuming your events are stored in a node named "events"
const eventsRef = ref(database, "events");

try {
    const snapshot = await get(eventsRef);
  
    if (snapshot.exists()) {
      regbox.innerHTML = ""; // Clear existing content before populating with new data
  
      snapshot.forEach((childSnapshot) => {
        const eventKey = childSnapshot.key; // Get the Firebase key
        const event = childSnapshot.val();
  
        // Check if the event ID is in local storage
        const registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
        const isRegistered = registeredEvents.includes(eventKey);

        // Create an event div with the fetched information
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.id = eventKey; // Set the Firebase key as the ID
  
        // Column 1: Date and Time
        const column1 = document.createElement("div");
        column1.classList.add("event-column");
        column1.innerHTML = `
          <p><strong>Kuupäev:</strong> ${event.date}</p>
          <p><strong>Kell:</strong> ${event.time}</p>
        `;
        eventDiv.appendChild(column1);
  
        // Column 2: Address and Slots
        const column2 = document.createElement("div");
        column2.classList.add("event-column");
        column2.innerHTML = `
          <p><strong>Vabu kohti:</strong> <span id="slots-${eventKey}">${event.slots - event.registeredPeople}</span></p>
          <p><strong>Aadress:</strong> ${event.address}</p>
        `;
        eventDiv.appendChild(column2);
  
        // Column 3: Display "Registered" if the event is registered
        const column3 = document.createElement("div");
        column3.classList.add("event-column");
        column3.innerHTML = isRegistered ? '<p>Registered</p>' : `
          <div class="input-container">
            <input type="text" class="nameInput" placeholder="Your Name">
          </div>
          <div class="regbutton-container">
            <button class="registerButton" id="regButton">Registreeru</button>
          </div>
        `;
        eventDiv.appendChild(column3);
  
        // Append the event div to the regbox
        regbox.appendChild(eventDiv);
      });
    } else {
      console.log("No data available");
    }
} catch (error) {
    console.error("Error fetching events from Firebase:", error);
}


document.addEventListener('click', async function(event) {
    if (event.target && event.target.classList.contains('registerButton')) {
      const eventDiv = event.target.closest('.event');
      if (eventDiv) {
        const eventKey = eventDiv.id;
        const availableSlotsElement = document.getElementById(`slots-${eventKey}`);
        const availableSlots = parseInt(availableSlotsElement.textContent);
  
        // Get the name input value
        const nameInput = eventDiv.querySelector('.nameInput');
        const name = nameInput.value.trim();
  
        if (availableSlots > 0 && name !== "") {
          try {
            // Update registeredPeople in the database
            await updateRegisteredPeople(eventKey, name);

            // Update UI for the registered event
            updateEventUI(eventDiv);

            // Register the event in local storage
            registerEventInLocalStorage(eventKey);
  
            // Registration successful
            console.log("Dynamic Register button pressed");
            // Implement the registration logic based on your requirements
          } catch (error) {
            console.error("Error updating registeredPeople:", error);
            // Handle error, display a message, etc.
          }
        } else {
          // Display a message or take other actions based on conditions
          console.log("Registration conditions not met");
        }
      }
    }
  });
  
function updateEventUI(eventDiv) {
    // Replace the contents of the third column with "registered"
    const thirdColumn = eventDiv.querySelector('.event-column:nth-child(3)');
    thirdColumn.innerHTML = '<p>Registered</p>';
}
  
function registerEventInLocalStorage(eventKey) {
    // Get the user's registered events from local storage
    const registeredEvents = JSON.parse(localStorage.getItem('registeredEvents')) || [];
  
    // Add the current event key to the list
    registeredEvents.push(eventKey);
  
    // Save the updated list back to local storage
    localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents));
}

async function updateRegisteredPeople(eventKey, name) {
    const eventRef = ref(database, `events/${eventKey}`);
  
    try {
      const currentDataSnapshot = await get(eventRef);
      const currentData = currentDataSnapshot.val();
  
      if (!currentData) {
        // Event doesn't exist, handle accordingly
        console.log("Event does not exist:", eventRef.key);
        return;
      }
  
      // Update registeredPeople and set it back to the database
      currentData.registeredPeople = (currentData.registeredPeople || 0) + 1;
  
      // Assuming you have a field for storing registered names, update it
      currentData.registeredNames = currentData.registeredNames || [];
      currentData.registeredNames.push(name);
  
      await set(eventRef, currentData);
  
      // Update the UI or perform any additional logic as needed
      console.log("Registered people updated successfully:", eventRef.key);
    } catch (error) {
      console.error("Error updating registeredPeople:", error);
      // Handle error, display a message, etc.
    }
}
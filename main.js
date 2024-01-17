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

        // Create an event div with the entered information
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        // Column 1: Date and Time
        const column1 = document.createElement("div");
        column1.classList.add("event-column");
        column1.innerHTML = `
          <p><strong>Kuupäev:</strong> ${eventDate}</p>
          <p><strong>Kell:</strong> ${eventTime}</p>
        `;
        eventDiv.appendChild(column1);

        // Column 2: Address and Slots
        const column2 = document.createElement("div");
        column2.classList.add("event-column");
        column2.innerHTML = `
          <p><strong>Vabu kohti:</strong> ${availableSlots}</p>
          <p><strong>Aadress:</strong> ${eventAddress}</p>
        `;
        eventDiv.appendChild(column2);

        // Column 3: Button and Text Input
        const column3 = document.createElement("div");
        column3.classList.add("event-column");
        column3.innerHTML = `
            <div class="input-container">
                <input type="text" class="nameInput" placeholder="Your Name">
            </div>
            <div class="regbutton-container">
                <button class="registerButton">Registreeru</button>
            </div>
        `;
        eventDiv.appendChild(column3);

        // Append the event div to the regbox
        const regbox = document.querySelector(".regbox");
        regbox.appendChild(eventDiv);

        // Close the modal after handling the form
        modal.style.display = "none";
    });
    } else {
      // Regular user logic or content
      console.log("User is not an admin");
    }
  });
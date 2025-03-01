<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="regstyle.css">
    <title>Shiatsu</title>
</head>
<body>
    <div class="column" id="column1"></div>
    <div class="column" id="column2">
        <div class="title">
            <h1>SHIATSU</h1>
            <h3>Registreerimine</h3>
        </div>
        <div class="regbox"></div>
        <button id="addEventButton">Lisa aeg</button>
        <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Lisa Aeg</h2>
              <form id="eventForm">
                <div class="form-group">
                  <label for="eventDate">kuupäev:</label>
                  <input type="date" id="eventDate" required>
                </div>
          
                <div class="form-group">
                  <label for="eventTime">Kell:</label>
                  <input type="time" id="eventTime" required>
                </div>
          
                <div class="form-group">
                  <label for="availableSlots">Kohtade arv:</label>
                  <input type="number" id="availableSlots" required>
                </div>
          
                <div class="form-group">
                  <label for="eventAddress">Aadress:</label>
                  <input type="text" id="eventAddress" required>
                </div>
          
                <button type="button" id="submitEvent">Lisa</button>
              </form>
            </div>
        </div>
    </div>
    <div class="column" id="column3"></div>

<script src="firebase-config.js" type="module" defer></script>
<script src="main.js" type="module" defer></script>
</body>
</html>
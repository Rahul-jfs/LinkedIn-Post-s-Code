// Function to get current time
function getCurrentTime() {
  // Create a new Date object
  var now = new Date();

  // Get hours, minutes, and seconds
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Format hours, minutes, and seconds to ensure they have two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Construct the time string
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Return the time string
  return timeString;
}

// Function to update current time
function updateCurrentTime() {
  // Get the paragraph element to display the time
  var timeParagraph = document.getElementById("current-time");

  // Get the current time
  var currentTime = getCurrentTime();

  // Update the content of the paragraph with the current time
  timeParagraph.textContent = "Current time is: " + currentTime;
}

// Call the function initially to display current time
updateCurrentTime();

// Update current time every second
setInterval(updateCurrentTime, 1000);

var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn");
var secondsLeft = 6 * 15 + 1;
var timerEl = document.getElementById("timer");



function startTimer() {
  // swap welcome msg w/ questions
  document.getElementById("home").classList.add("d-none");

  // timer set and begins 90s countdown
  setTimer();
}

function setTimer() {
  var countdown = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

  }, 1000);
}


// Event Listeners for Main Buttons
startBtn.addEventListener("click", startTimer);
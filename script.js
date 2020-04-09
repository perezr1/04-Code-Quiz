var startBtn = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var secondsLeft = (6 * 15 + 1);

// Event Listeners for Main Buttons
startBtn.addEventListener("click", startTimer);

function startTimer() {
  // swap welcome msg w/ questions
  document.getElementById("home").classList.add("d-none");

  // timer set and begins 90s countdown
  setTimer();
}

function setTimer() {
  var countdown = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time : " + secondsLeft;
  }, 1000);
}

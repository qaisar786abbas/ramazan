
var ramadanStart = new Date('March 23, 2023 00:00:00 GMT+05:00');

function updateCountdown() {
  var now = new Date();
  var timeLeft = ramadanStart.getTime() - now.getTime();

  var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  var minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  var secondsLeft = Math.floor((timeLeft / 1000) % 60);

var countdownElement = document.getElementById('countdown');
  
countdownElement.textContent = `RAMADAN 2023: ${daysLeft} DAYS, ${hoursLeft} HOURS, ${minutesLeft} MINUTES, ${secondsLeft} SECONDS LEFT TO RAMADAN.`;
}


setInterval(updateCountdown, 1000);


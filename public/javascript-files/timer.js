let milliseconds = 0;
let seconds = 0;
let minute = 0;
let hour = 0;
let intervalIncrease = null;
let intervalPrint = null;
let isRunning = false;
let isReset = false;

function startTimer() {

   if (isRunning) {
      alert("Clock is already running!");
   } else {
      intervalIncrease = setInterval(increaseTime, 10.095);
      intervalPrint = setInterval(printTime, 10);
      isRunning = true;
      isReset = false;
   }


}

function resetTimer() {

   if (isReset) {
      alert("Clock is already reset!");
   } else {
      milliseconds = 0;
      seconds = 0;
      minute = 0;
      hour = 0;
      clearInterval(intervalIncrease);
      clearInterval(intervalPrint);
      printTime();
      isRunning = false;
      isReset = true;
   }

}

function pauseTimer() {

   if (!isRunning && !isReset) {
      alert("Clock is already paused!");
   } else if (!isRunning && isReset) {
      alert("Clock should be started to be paused!");
   } else {
      clearInterval(intervalIncrease);
      clearInterval(intervalPrint);
      printTime();
      isRunning = false;
   }

}

function increaseTime() {
   milliseconds += 1;
}

function timeCheck() {
   if (milliseconds >= 100) {
      milliseconds = 0;
      seconds += 1;
   }
   if (seconds >= 60) {
      seconds = 0;
      minute += 1;
   }
   if (minute >= 60) {
      minute = 0;
      hour += 1;
   }
}

function printTime() {
   timeCheck();

   document.getElementById("hour").innerHTML = hour.toString();
   document.getElementById("minute").innerHTML = minute.toString();
   document.getElementById("seconds").innerHTML = seconds.toString();
   document.getElementById("milliseconds").innerHTML = milliseconds.toString();
}
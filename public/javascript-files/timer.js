//Timer Parameters
let milliseconds = 0;
let seconds = 0;
let minute = 0;
let hour = 0;


let intervalIncrease = null;
let intervalPrint = null;

//To check whether clock is running or not
let isRunning = false;

//To check whether clock is reset
let isReset = false;

//Start button function
function startTimer() {
   //If clock is started, it can not be started again
   if (isRunning) {
      alert("Clock is already running!");
   } 
   else {
      intervalIncrease = setInterval(increaseTime, 10.095);
      intervalPrint = setInterval(printTime, 10);
      isRunning = true;
      isReset = false;
   }


}

//Reset button function
function resetTimer() {
   //If clock is reseted, it can not be reseted again
   if (isReset) {
      alert("Clock is already reset!");
   } 
   else {
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

//Pause button function
function pauseTimer() {
   //If clock is paused, it can not be paused again
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

//Increasing time function
function increaseTime() {
   milliseconds += 1;
}

//Digitiliazing the timer
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

//Printing time in the screen
function printTime() {
   timeCheck();

   document.getElementById("hour").innerHTML = hour.toString();
   document.getElementById("minute").innerHTML = minute.toString();
   document.getElementById("seconds").innerHTML = seconds.toString();
   document.getElementById("milliseconds").innerHTML = milliseconds.toString();
}
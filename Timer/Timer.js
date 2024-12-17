//horloge basique
let isTimerOn = false;
let timerValue = 0;
let timer;

const clockContainer = document.getElementById("clock");

setInterval(UpdateClock, 1000);



function UpdateClock() {

    let date = new Date();
    clockContainer.children[0].innerText = `${date.getHours()}:${(date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes())}:${(date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds())}`;
    UpdateTimer();
}
//compte a rebours que le user peut stopper reprendre + rentrer la valeur


const timerContainer = document.getElementById("timer");
const timerDisplay = document.createElement("p");
const timerInputContainer = document.createElement("div");
timerInputContainer.classList.add("timerInput");
const controlsContainer = document.createElement("div");
controlsContainer.classList.add("controls");
const startButton = document.createElement("button");
startButton.textContent = "Start Timer";


const inputHours = document.createElement("input");
inputHours.placeholder = "00"
const inputMinutes = document.createElement("input");
inputMinutes.placeholder = "00"
const inputSeconds = document.createElement("input");
inputSeconds.placeholder = "00"

startButton.addEventListener("click", StartTimer);
const endButton = document.createElement("button");
endButton.textContent = "End Timer";

endButton.addEventListener("click", StopTimer);
const pauseButton = document.createElement("button");
pauseButton.textContent = "Pause Timer";

pauseButton.addEventListener("click", PauseTimer)

timerInputContainer.appendChild(inputHours);
timerInputContainer.appendChild(inputMinutes);
timerInputContainer.appendChild(inputSeconds);
timerContainer.appendChild(timerInputContainer);
timerContainer.appendChild(timerDisplay);
controlsContainer.appendChild(startButton);
controlsContainer.appendChild(pauseButton);
controlsContainer.appendChild(endButton);
timerContainer.appendChild(controlsContainer);
console.log(timerContainer);




function StartTimer() {
    if (isTimerOn) return;
    if (inputHours.value === "" && inputMinutes.value === "" && inputSeconds.value === "") return;
    timerValue = (inputHours.value * 3600) + (inputMinutes.value * 60)+ inputSeconds.value;
    timer = setTimeout(() => {
        isTimerOn = false;
        console.log("timer is done!")}, timerValue * 1000)
    console.log(timerValue);
    isTimerOn = true;
    UpdateTimer();
}
function StopTimer() {
    timerValue = 0;
    clearTimeout(timer);
    UpdateTimer();
    isTimerOn = false;
}
function PauseTimer() {
    isTimerOn = !isTimerOn;
    timerDisplay.color = isTimerOn ? "white" : "green";
}
function UpdateTimer() {
    if(!isTimerOn) return;

    if(timerValue != 0) timerValue--;


    let hours = parseInt(timerValue/3600);
    let minutes = parseInt((timerValue - (hours * 3600))/60);
    let seconds = parseInt(timerValue - (minutes * 60) - (hours * 3600)) ;
    timerDisplay.textContent = `${hours < 10 ? `0${hours}` : hours}:${(minutes < 10 ? `0${minutes}` : minutes)}:${(seconds ? `0${seconds}` : seconds)}`;
    if(timerValue == 0) {
        timerDisplay.textContent = `Your timer of ${inputHours.value?? "0"} hours ${inputMinutes.value?? "0"} minutes ${inputSeconds.value} seconds is done`;
        istimerOn = false;
    }
}

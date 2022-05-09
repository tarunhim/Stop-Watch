const timeDisplay = document.querySelector("#numbers");
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let hrs  = 0;
let mins = 0;
let secs = 0;
let msecs = 0;

startBtn.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalid = setInterval(updateTime, 1);
    }
});


pauseBtn.addEventListener("click", () => {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalid);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    secs = 0;
    mins = 0;
    hrs = 0;
    msecs = 0;
    startTime = 0;
    elapsedTime = 0;
    clearInterval(intervalid);
    timeDisplay.textContent = "00:00:00:00";
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    msecs = Math.floor((elapsedTime / 10) %99);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) %60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    msecs = pad(msecs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${msecs}`;

    function pad(unit) {
        return ("0"+unit).length > 2 ? unit : "0" + unit;
    }
}

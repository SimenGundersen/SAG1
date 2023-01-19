// Definer start-, runde- og stoppknappene
let startBtn = document.getElementById("startBtn");
let lapBtn = document.getElementById("lapBtn");
let stopBtn = document.getElementById("stopBtn");

// Definer en variabel for å lagre tiden
let time = 0;

// Definer en variabel for å lagre intervalID
let intervalID;

// Funksjon for å starte timeren
startBtn.addEventListener("click", function() {
    intervalID = setInterval(function() {
        time++;
        document.getElementById("time").innerHTML = time;
    }, 1000);
});

// Funksjon for å ta rundetider
lapBtn.addEventListener("click", function() {
    // Lagre gjeldende tid
    let lapTime = time;

    // Vis rundetiden
    let lapList = document.getElementById("lapList");
    let lapItem = document.createElement("li");
    lapItem.innerHTML = lapTime;
    lapList.appendChild(lapItem);

    // Tilbakestill tiden
    time = 0;
});

// Funksjon for å stoppe timeren
stopBtn.addEventListener("click", function() {
    clearInterval(intervalID);
});
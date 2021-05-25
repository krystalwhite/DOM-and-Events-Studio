// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("page loaded");
    initialize();
});

function initialize () {
    let takeoffButton = document.getElementById("takeoff");
    let flightStatusUpdate = document.getElementById("flightStatus");
    let flightScreenColor = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");

    takeoffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatusUpdate.innerHTML = "Shuttle in flight.";
            flightScreenColor = "blue";
            shuttleHeight.innerHTML += 10000;
        }
    } 
});

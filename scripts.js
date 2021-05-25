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
    }); 

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusUpdate.innerHTML = "The shuttle has landed.";
        flightScreenColor = "green";
        shuttleHeight.innerHTML = 0;
    });  
    
    abortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatusUpdate.innerHTML = "Mission aborted.";
            flightScreenColor = "green";
            shuttleHeight.innerHTML = 0;
    });  

    upButton.addEventListener("click", function() {
        // move rocket image up 10 px
        shuttleHeight.innerHTML += 10000;
    });  

    downButton.addEventListener("click", function() {
        // move rocket image down 10 px
        shuttleHeight.innerHTML -= 10000;
    });  

    leftButton.addEventListener("click", function() {
        // move rocket image left 10 px
    });  

    leftButton.addEventListener("click", function() {
        // move rocket image right 10 px
    });  

});



window.addEventListener("load", function() {
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

    let imgObj = document.getElementById("shuttlepic");
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = '150px'; 
    imgObj.style.bottom = '0px';

    takeoffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatusUpdate.innerHTML = "Shuttle in flight.";
            flightScreenColor.style.backgroundColor = "blue";
            imgObj.style.bottom = "10px";
            shuttleHeight.innerHTML = 10000;
        }
    }); 

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusUpdate.innerHTML = "The shuttle has landed.";
        flightScreenColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        imgObj.style.bottom = "0px";
        imgObj.style.left = '150px'; 
    });  
    
    abortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatusUpdate.innerHTML = "Mission aborted.";
            flightScreenColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            imgObj.style.bottom = "0px";
            imgObj.style.left = '150px'; 
        }
    });

    upButton.addEventListener("click", function() {
        imgObj.style.bottom = parseInt(imgObj.style.bottom) + 10 + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });  

    downButton.addEventListener("click", function() {
        imgObj.style.bottom = parseInt(imgObj.style.bottom) + -10 + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + -10000;
    });  

    leftButton.addEventListener("click", function() {
        imgObj.style.left = parseInt(imgObj.style.left) + -10 + 'px';
    });  

    rightButton.addEventListener("click", function() {
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    });  

});
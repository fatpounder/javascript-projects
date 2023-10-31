// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let rocketPosHor = 0
    let rocketPosVert = 0

    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');

    takeoffButton.addEventListener("click", function() {
      let shouldTakeOff = confirm("Confirm that the shuttle if ready for takeoff")  

    if (shouldTakeOff) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = "10000";
    }
    })

    landButton.addEventListener("click", function() {
      alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = "0";
    })

    abortButton.addEventListener("click", function() {
      alert("Confirm that you want to abort the mission.");
      flightStatus.innerHTML = "Abort Mission";
      shuttleBackground.style.backgroundColor = "green"
      shuttleHeight.innerHTML = "0"
    })

    this.document.addEventListener("click", function(event) {

    if (event.target.id === "up") {
      rocketPosVert += 10
      rocket.style.marginBottom = rocketPosVert + 'px'
      altitude += 10000
      shuttleHeight.innerHTML = altitude
    }
    if (event.target.id === "down") {
      rocketPosVert -= 10
      rocket.style.marginBottom = rocketPosVert + 'px'
      altitude -= 10000
      shuttleHeight.innerHTML = altitude
    }
    if (event.target.id === "left") {
      rocketPosHor -= 10
      rocket.style.marginLeft = rocketPosHor + 'px'
    } 
    if (event.target.id === "right") {
      rocketPosHor += 10
      rocket.style.marginLeft = rocketPosHor + 'px'
    } 
    })
})
function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    })
    missionAbort.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "#ff0000";
    })
    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
    })
    missionAbort.addEventListener("click", function() {
        if (window.confirm("Are you sure you want to abort the mission?")) {
            window.confirm("Mission aborted! Space shuttle returning home")
        }
    })
}

window.addEventListener("load", init);

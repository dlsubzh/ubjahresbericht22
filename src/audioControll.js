
const mixBut = document.getElementById("mixBut");
const bgm = document.getElementById("bgm");


function Start(){
    bgm.play();
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
    mixBut.innerHTML = "pause"
}

function Stop(){
    bgm.pause();
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
    mixBut.innerHTML = "play_circle"
}




const mixBut = document.getElementById("mixBtn");
const bgm = document.getElementById("bgm");

let isPlaying = false;

bgm.onplaying = function(){
    isPlaying = true;
};


bgm.onpause = function(){
    isPlaying = false;
};


function Stop(){

    if (!bgm.paused && isPlaying){
        bgm.pause();
        mixBut.value = "Start";
        mixBut.innerHTML = "volume_up"
    }
}

mixBut.onclick = () => {
    console.log("clicked");
    if (bgm.paused && !isPlaying){
        mixBut.value = "Stop";
        mixBut.innerHTML = "volume_off"
        bgm.play();
    } else if (!bgm.paused && isPlaying) {
        bgm.pause();
        mixBut.value = "Start";
        mixBut.innerHTML = "volume_up"
    }
};

///////////////////////
/// canvas position ///
///////////////////////

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
const height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
//console.log(width);
let canvas = document.getElementById("canvas");

const canvas_width = width * 0.8;
const adjust = (width - canvas_width) * 0.48;

canvas.style.width = String(canvas_width) + "px";
canvas.style.height = String(width * 1.3) + "px";
canvas.style.left = String(adjust) + "px";
canvas.style.top = "0px";

////////////////////
// popup controll //
////////////////////

function hidePopup(elemId) {

    if (elemId == "videoContent"){
        const player = new Vimeo.Player("video");
        player.pause();
    }
    
    const popupContent = document.getElementById(elemId);
    popupContent.style.visibility = "hidden";

  }

function showPopup(elemId){
    const popupContent = document.getElementById(elemId);
    popupContent.style.visibility = "visible";
}
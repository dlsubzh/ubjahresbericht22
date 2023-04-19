const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//console.log(width);
let canvas = document.getElementById("canvas");

const canvas_width = width * 0.8;
const adjust = (width - canvas_width) * 0.48;

canvas.style.width = String(canvas_width) + "px";
canvas.style.height = String(width * 1.3) + "px";
canvas.style.left = String(adjust) + "px";
canvas.style.top = "0px";

//////////////////
//  Popup       //
//////////////////

const video = document.getElementById("video");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popupContent");

popupTop = popup.offsetTop;
videoTop = video.offsetTop;
videoLeft = video.offsetLeft;
videoHeight = video.offsetHeight;
videoWidth = video.offsetWidth;
closeBtnTop = (videoTop - popupTop) *0.5 - 200;
//closeBtnTop = videoTop*0.5 - 150; 
closeBtnLeft = videoLeft*0.5 - 100;

console.log(popupTop);
console.log(videoTop);

closeBtn.style.top = String(closeBtnTop) + "px";
closeBtn.style.left = String(closeBtnLeft) + "px";


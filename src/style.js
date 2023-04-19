///////////////////////
/// canvas position ///
///////////////////////

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//console.log(width);
let canvas = document.getElementById("canvas");

const canvas_width = width * 0.8;
const adjust = (width - canvas_width) * 0.48;

canvas.style.width = String(canvas_width) + "px";
canvas.style.height = String(width * 1.3) + "px";
canvas.style.left = String(adjust) + "px";
canvas.style.top = "0px";

/////////////
//  Popup  //
/////////////

const video = document.getElementById("video");
const closeBtn = document.getElementById("closeBtn");

const videoRect = video.getBoundingClientRect(); 
videoTop = videoRect.top;
videoLeft = videoRect.left;

closeBtnTop = videoTop - 33;
closeBtnLeft = videoLeft + 30;

closeBtn.style.top = String(closeBtnTop) + "px";
closeBtn.style.left = String(closeBtnLeft) + "px";


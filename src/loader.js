
function end_loader() {
    var loader = document.querySelector(".lds-ellipsis");
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 800);
  }
  
  window.addEventListener("load", function () {
    
    setTimeout(function () {
      end_loader();
      const mixBtn = document.getElementById("mixBtn");
      mixBtn.style.visibility = "visible";
      const showCopyrightBtn = document.getElementById("showCopyrightBtn");
      showCopyrightBtn.style.visibility = "visible";
  
    }, 3000);
  });
  
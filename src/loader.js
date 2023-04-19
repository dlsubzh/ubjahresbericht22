
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
      const mixBut = document.getElementById("mixBut");
      mixBut.style.visibility = "visible";
    }, 3000);
  });
  
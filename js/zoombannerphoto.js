  document.getElementById("carZoom").addEventListener("mouseenter", mouseEnter);
  document.getElementById("carZoom").addEventListener("mouseleave", mouseLeave);

    function mouseEnter () {
    document.getElementById("carZoom").style.transform = "scale(1.2)";
    document.getElementById("carZoom").style.transition = "all 10s linear";
  }

    function mouseLeave () {
    document.getElementById("carZoom").style.transform = "scale(1.0)";
    document.getElementById("carZoom").style.transition = "all 10s ease-in-out";

  }
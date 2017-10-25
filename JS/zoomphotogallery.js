    var x = document.querySelectorAll(".photos");
      for (var i = 0; i < x.length; i++) {
        x[i].addEventListener("mouseenter", photoZoom)
        x[i].addEventListener("mouseleave", photoReturn)

      }

    function photoZoom () {
      console.log("photoZoom")
      this.style.transform = "scale(1.1, 1.1)";
      this.style.transition = "all 0.4s ease-in-out"
    }

    function photoReturn () {
      console.log("photoReturn")
      this.style.transform = "scale(1.0, 1.0)";
      this.style.transition = "all 0.4s ease-in-out"

    }
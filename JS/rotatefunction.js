  function rotateFunction(x) {
    // x.classList.toggle('change')
    // console.log("toggled change")
    var toggleSwitch1 = document.getElementById("hamburger1");
    var toggleSwitch2 = document.getElementById("hamburger2");
    var toggleSwitch3 = document.getElementById("hamburger3");
    console.log(toggleSwitch1);
    console.log(toggleSwitch2);
    console.log(toggleSwitch3);
    toggleSwitch1.classList.toggle("changetop");
    toggleSwitch2.classList.toggle("changemiddle");
    toggleSwitch3.classList.toggle("changebottom");
    console.log(toggleSwitch1);
    console.log(toggleSwitch2);
    console.log(toggleSwitch3);
  }
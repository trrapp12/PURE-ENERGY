function setSpacing () {
// create variables for the separate elements
	var sectionThreeHeader = document.getElementById('sectionThreeHeader');
	var subSectionThreeHeader = document.getElementById('subSectionThreeHeader');
	var ourNatureTop = document.getElementById('ourNatureTop');
	var counterclockwiseTop = document.getElementById('counterclockwiseTop');
		counterclockwiseTop.style.position = "absolute";
	var purEnergyTop = document.getElementById('purEnergyTop');
	var adjustup = document.getElementById('adjustup');
	var clockWiseBottom = document.getElementById('clockWiseBottom');
	var pureEnergyBottom = document.getElementById('pureEnergyBottom');
	var ourNatureBottom = document.getElementById('ourNatureBottom');

// create variable to get the bounding box information
 	var sectionThreeCoordinates = sectionThreeHeader.getBoundingClientRect();
  	var purEnergyTopCoordinates = purEnergyTop.getBoundingClientRect();
 	var purEnergyTopCoordinatesCalc = window.getComputedStyle(purEnergyTop).getPropertyValue("margin-left");
 		console.log("purEnergyTopCoordinatesCalc is: " + purEnergyTopCoordinatesCalc);
 	var pETCC = parseFloat(purEnergyTopCoordinatesCalc)
 		console.log(pETCC)
 	var purEnergyTopCoordinatesPos = window.getComputedStyle(purEnergyTop).getPropertyValue("left");
 		console.log("purEnergyTopCoordinatesPos is: " + purEnergyTopCoordinatesPos);
 	var pETCP = parseFloat(purEnergyTopCoordinatesPos)
 		console.log(pETCP)
  	var counterclockwiseTopCoordinates = counterclockwiseTop.getBoundingClientRect();

  	console.log (sectionThreeCoordinates.bottom, sectionThreeCoordinates.height, sectionThreeCoordinates.left, sectionThreeCoordinates.right, sectionThreeCoordinates.top, sectionThreeCoordinates.width, sectionThreeCoordinates.x, sectionThreeCoordinates.y);

  	ourNatureTop.style.right = ((purEnergyTopCoordinates.right - purEnergyTopCoordinates.left) * .20) + "px";

	var leftMargin = window.getComputedStyle(purEnergyTop, null).getPropertyValue("margin-left");
	var x = (pETCC + pETCP) +"px";
		console.log(x)
	document.getElementById("counterclockwiseTop").style.setProperty("right", x);
	// document.getElementById("counterclockwiseTop").style.right = x;
	// document.getElementById("counterclockwiseTop").style.setAttribute("right", "200 px")
// This worked in testing for setting the position property to static...document.getElementById("counterclockwiseTop").style.setProperty("position", "static")
	
}

window.onload = setSpacing();
window.addEventListener('resize', setSpacing);
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

	var counterclockwiseTopCoordinates = counterclockwiseTop.getBoundingClientRect();
	var leftMargin = window.getComputedStyle(purEnergyTop, null).getPropertyValue("margin-left");
 	var sectionThreeCoordinates = sectionThreeHeader.getBoundingClientRect();

 	// create variables defining the coordinates to the top, center logo.  Sets the right property of top quote "Our Nature Consists in Motion," to
  	var purEnergyTopCoordinates = purEnergyTop.getBoundingClientRect();
  	ourNatureTop.style.position = "absolute"

	// this block uses window to get the calculated "margin-left" value of the top PURE EnERGY logo, sets that equal to a variable, parses the "px" off of it, and then console logs the value
 	var purEnergyTopCoordinatesCalc = window.getComputedStyle(purEnergyTop).getPropertyValue("margin-left");
 		console.log("purEnergyTopCoordinatesCalc is: " + purEnergyTopCoordinatesCalc);

 	// parses the "px" off of the measurements and keeps the significant digits by using float
 	var pETCC = parseFloat(purEnergyTopCoordinatesCalc)
 		console.log(pETCC)

	// this block uses window to get the calculated "left" value of the top Pure Energy logo, sets that equal to a variable, parses the "px" off of it, and then console logs the value
 	var purEnergyTopCoordinatesPos = window.getComputedStyle(purEnergyTop).getPropertyValue("left");
 		console.log("purEnergyTopCoordinatesPos is: " + purEnergyTopCoordinatesPos);

 	// parses the "px" off of the measurements and keeps the significant digits by using float
 	var pETCP = parseFloat(purEnergyTopCoordinatesPos)
 		console.log(pETCP)

	// This block adds the "margin-left" and the "left" value of the top PURE EnERGY logo, reintruduces the "px" unit, and sets the "right" property of "counterclockwiseTop" to that value
	var x = (pETCC + pETCP) +"px";
		console.log(x)
	document.getElementById("counterclockwiseTop").style.setProperty("right", x);
	
}

window.onload = setSpacing();
window.addEventListener('resize', setSpacing);
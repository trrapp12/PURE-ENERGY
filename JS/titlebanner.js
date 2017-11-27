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

	var sectionThreeCoordinates = sectionThreeHeader.getBoundingClientRect();
	var purEnergyTopCoordinates = purEnergyTop.getBoundingClientRect();
	var counterclockwiseTopCoordinates = counterclockwiseTop.getBoundingClientRect();

	console.log (sectionThreeCoordinates.bottom, sectionThreeCoordinates.height, sectionThreeCoordinates.left, sectionThreeCoordinates.right, sectionThreeCoordinates.top, sectionThreeCoordinates.width, sectionThreeCoordinates.x, sectionThreeCoordinates.y);

	ourNatureTop.style.right = ((purEnergyTopCoordinates.right - purEnergyTopCoordinates.left) * .20) + "px";
	// ourNatureTop.style.top = 200 + "px"; example for setting top
	// ourNatureTop.style.background = "red"; example for setting background
	var leftMargin = window.getComputedStyle(purEnergyTop, null).getPropertyValue("margin-left")
	console.log("Pure Energy TC position =" + purEnergyTopCoordinates.left, "Pure Energy TC left margin =" + leftMargin);
	var x = counterclockwiseTop.style.setProperty('margin-left', 200px);
	console.log(x)
	// console.log(counterclockwiseTopCoordinates.left, counterclockwiseTopCoordinates.right, purEnergyTopCoordinates.left, purEnergyTopCoordinates.right)
	// console.log(counterclockwiseTop.style.right, purEnergyTopCoordinates.left)
}
// alert("Javascript connected");
window.onload = setSpacing();
window.addEventListener('resize', setSpacing);
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
	console.log("Pure Energy TC position =" + purEnergyTopCoordinates.position, "Pure Energy TC left margin =" + purEnergyTop.style.marginLeft);
	counterclockwiseTop.style.right = ((purEnergyTopCoordinates.position + purEnergyTopCoordinates.style.marginLeft) + "px")
	console.log(counterclockwiseTopCoordinates.left, counterclockwiseTopCoordinates.right, purEnergyTopCoordinates.left, purEnergyTopCoordinates.right)
	console.log(counterclockwiseTop.style.right, purEnergyTopCoordinates.left)
}
// alert("Javascript connected");
window.onload = setSpacing();
window.addEventListener('resize', setSpacing);
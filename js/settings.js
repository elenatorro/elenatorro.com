function changeDisco() {
	document.getElementById("canvas").style.backgroundImage="url('img/dancefloor.JPG')";
	document.body.style.backgroundPosition="cover";
}

function changeBeach() {
	document.getElementById("canvas").style.backgroundImage="url('img/beach.jpg')";
	document.body.style.backgroundPosition="cover";
}

function changeLandscape() {
	document.getElementById("canvas").style.backgroundImage="url('img/landscape.jpg')";
	document.body.style.backgroundPosition="cover";
}

function changeMoon() {
	document.getElementById("canvas").style.backgroundImage="url('img/moon.jpg')";
	document.body.style.backgroundPosition="cover";
}

function changeNewYork() {
	document.getElementById("canvas").style.backgroundImage="url('img/city.jpg')";
	document.body.style.backgroundPosition="cover";
}

function changeFace() {
	document.getElementById("myhead").src = document.getElementById("img-url").value;
}

function changeChewbacca() {
	document.getElementById("mybody").src = 'img/chewbacca.png';
	document.getElementById("mybody").className = 'normal';

}

function changeOktoberfestBoy() {
	document.getElementById("mybody").src = 'img/oktoberfest_boy.png';
	document.getElementById("mybody").className = 'normal';
}

function changeOktoberfestGirl() {
	document.getElementById("mybody").src = 'img/oktoberfest.png';
	document.getElementById("mybody").className = 'normal';
}

function changeSpiderman() {
	document.getElementById("mybody").src = 'img/spiderman.png';
	document.getElementById("mybody").className = 'big';
}
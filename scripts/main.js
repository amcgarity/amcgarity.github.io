var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/eagles.png') {
		myImage.setAttribute ('src','images/wentz.jpg');
	} else {
		myImage.setAttribute('src','images/eagles.png')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + ' is a Philadelphia Eagles Fan'
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
}

myButton.onclick = function() {
	setUserName();
}
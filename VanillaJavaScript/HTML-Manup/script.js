var clicks = 0;
function clickHandler() {
	clicks++;
	var display = document.getElementById('mySpan');
	if(clicks == 1){
		display.innerHTML = 'once';
	} else {
		display.innerHTML = clicks + 'times';
	}
}

// var button = document.getElementById('egg');
// button.addEventListener('click', clickHandler);

// hovering and chagne the color of things
function changeMe(){
	var elements = document.getElementsByClassName('unDone');
	for(var i=0; i < elements.length; i++){
		elements[i].style.color = 'red';
		elements[i].style.fontWeight = 'bold';
	}
}

function restore() {
	var elements = document.getElementsByClassName('unDone');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color= '';
		elements[i].style.fontWeight = '';
	}
}

var myTag = document.getElementById('myTitle');
myTag.addEventListener('mouseover', changeMe);
myTag.addEventListener('mouseout', restore);

// code of input that disply the value on the screen

function userHandler(e){
	if(e.keyCode == 13) {	//13 is keyCode which test wether user clicked enter, as keycode for backspace is 32
		var inpField = document.getElementById('input');
		var textOption = document.getElementById('value');
		textOption.innerHTML = inpField.value;
		textOption.style.backgroundColor = 'green';
		textOption.style.textTransform = 'capitalize';
	}

}

document.addEventListener('keyup', userHandler);



// The alternative to above code but with submit button is the following
function submitHandler(){	
	var inpField = document.getElementById('input');
	var textOption = document.getElementById('value');
	textOption.innerHTML = inpField.value;
	textOption.style.backgroundColor = 'green';
	textOption.style.textTransform = 'capitalize';


}

var myButton = document.getElementById('submit');
myButton.addEventListener('click', submitHandler);
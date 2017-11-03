// var click = 0;
// function clickNumber(){
// 	click++;
// 	var spanElement = document.getElementById('result');
// 	if(click == 1){
// 		spanElement.innerHTML = 'once';
// 	} else {
// 		spanElement.innerHTML = click + 'times';
// 	}
// }

// var button = document.getElementById('btn');
// button.addEventListener('click', clickNumber);


var lick = 0;

function clickHandler(){
	click++;
	var spanElement = $('#result');
	if (click == 1) {
		spanElement.html = 'once';
	} else {
		spanElement.html = click + 'times';
	}
}

$('#btn').click(clickHandler);

function keyPressHandler(e){
	if(e.keyCode == 13) {
		$('#list').append('<li>' + $('#item').val() +'</li>';
		$('#item').val('');
	}
}

$('#item').keyup(keyPressHandler);
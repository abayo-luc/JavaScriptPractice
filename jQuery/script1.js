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


var nClick = 0;
function clickHandler(){
	nClick++;
	if(nClick == 1) {
	$('#result').html('once');
	} else {
		$('#result').html(nClick + 'times');
	}
}

$('#btn').click(clickHandler);

// input and listing it bellow
function keyPressHandler(e){
	if(e.keyCode == 13) {
		$('#list').append('<li>' + $('#item').val() +'</li>');
		$('#item').val('');
	}
};

$('#item').keyup(keyPressHandler);


// onclick event that make bolder the text
$('#title').click(function(){
	$(this).css('background-color', 'green');
});
$('ul#highlight').find('li').on({
	mouseover: function(){
		$(this).css('font-weight','bold');
	},
	mouseleave: function(){
		$(this).css('font-weight', '');
	}
});
	




// reminding myself how to capture user location
function userLocation(position){
	var elements = document.getElementsByClassName('location');
	elements[0].innerHTML = position.coords.longitude;
	elements[1].innerHTML = position.coords.latitude;
}

function findeMe(){
	navigator.geolocation.getCurrentPosition(userLocation);
}

findeMe();
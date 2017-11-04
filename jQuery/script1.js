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
	if(e.keyCode == 32) {
		$('#list').append('<li>' + $('#item').val() +'</li>');
		$('#item').val('');
	}
};

$('#item').keyup(keyPressHandler);


// onclick event that make bolder the text
var textClick = 1;
$('#title').click(function(){
	if(textClick % 2 == 0) {
		$(this).cass('background-color', '#000');
	} else {
		$(this).css('background-color', 'green');
	}
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


// form manupulation code

$('select[name="choose"]').change(function(){
	$('#genderSpan').html($(this).val());
});

$('input[name="species"]').change(function(){
	if($(this).prop('checked')) {
		$('#speciesSpan').html($(this).val());
	}
});

var checkedElements = []
$('input:checkbox').change(function(){
	var value = $(this).val()
	if($(this).prop('checked')){
		checkedElements.push(value);
	} else {
		var index = checkedElements.indexOf(value)
		if(index != -1){
			checkedElements.splice(index, 1)
		}
	}

	$('#featureSpan').html(' ');
	for(i=0; i < checkedElements.length; i++) {
		$('#featureSpan').append(checkedElements[i]);
		if( i < checkedElements.length - 1) {
			$('#featureSpan').append(', ');
		} else {
			$('#featureSpan').append(' ');
		}

	}
});
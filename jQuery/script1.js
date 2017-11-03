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
}

$('#item').keyup(keyPressHandler);


// onclick event that make bolder the text
$('li').mouseover(function(){
	$(this).css('font-weight','bold');
});
$('li').mouseout(function(){
	$(this).css('font-weight', '');
});
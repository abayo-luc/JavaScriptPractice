/*
 * Implement all your JavaScript in this file!
 */

var valOne = '';
var valTwo = '';
var result = '';
var oper = null;
$('button.userInput').click(function(){
	if(oper != null && valOne.length != 0 ){	
		if( $(this).val() == 0 && valTwo.length == 0) {
			$('#display').val(0);
		} else {
			valTwo += $(this).val();
			$('#display').val(valTwo);
		}
	} else {
		if( $(this).val() == 0 && valOne.length == 0) {
			$('#display').val(0);
		} else {
			valOne += $(this).val();
			$('#display').val(valOne);
		}
	}
})

// calcuation operator
$('button.operator').click(function(){
	if(result.length !=0){
		valOne = result;
		valTwo = '';
	}
	oper = $(this);
})


// computation button
$('button#equalsButton').click(function(){
	if( valOne.length != 0) {
		if(oper.attr('id') == 'divideButton'){
			result = parseInt(valOne)/ parseInt(valTwo)
			$('#display').val(result);	
		} else if( oper.attr('id') == 'multiplyButton'){
			result = parseInt(valOne) * parseInt(valTwo)
			$('#display').val(result);
		} else if(oper.attr('id') == 'subtractButton') {
			result = parseInt(valOne) - parseInt(valTwo)
			$('#display').val(result)
		} else if(oper.attr('id')=='addButton'){
			result = parseInt(valOne) + parseInt(valTwo)
			$('#display').val(result)
		}
		valOne = '';
		valTwo = '';
		oper = null;
	} else {
		$('#display').val(0);
	}
});



// clear button 
$('#clearButton').click(function(){
	valOne = '';
	valTwo = '';
	result = '';
	oper = null;
	$('#display').val('');
});
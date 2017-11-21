// use these complicated palanteses to avoid some kind of errors
(function(){
// the use strict help you to avoid some kind of error due to making global variable, like forgeting add var while you are defining variable
'use strict';
angular.module('meApp', [])
	.controller('myCtrl', function($scope){
		$scope.name = "Jean Luc Abayo";
	});

})();


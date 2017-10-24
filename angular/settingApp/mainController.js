var app = angular.module("myApp", []);
app.controller('mainController',
 	function ($scope){
 		$scope.title = "Hello Luc";
 		$scope.hobbies = "Coding & Sci-fiction movies"
 	}
 );

// in this controller you can attach anything to the $scope
// and it will become a variable to use in the view. Like the
// way I attached the title with string 'Hello Luc' and access it in the view. 
// you can even attach hobbies and access it int the index view. 
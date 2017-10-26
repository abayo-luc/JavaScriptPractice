var app = angular.module("appStore", []);
app.controller('MainController',  
	function($scope){
	$scope.apps = [{
	    icon: 'img/1.png',
	    title: 'MOVE',
	    developer: 'MOVE, Inc.',
	    price: 0.99,
	    buttonText: 'Install'
 	 },

  	 {
	    icon: 'img/2.png',
	    title: 'Shutterbugg',
	    developer: 'Chico Dusty',
	    price: 2.99,
	    buttonText: 'Install'
  	},

   	{
	    icon: 'img/3.png',
	    title: 'Gameboard',
	    developer: 'Armando P.',
	    price: 1.99,
	    buttonText: 'Install'
  	}];

  	function download($index) {
  		
  	};
});
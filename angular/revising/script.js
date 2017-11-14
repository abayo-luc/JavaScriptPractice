var module = angular.module('itemList', []);
module.controller('itemController', function($scope){
	$scope.content = $scope.content;
	$scope.lengthCalc = function(){
		if($scope.content){
			var input = $scope.content.length;
			$scope.inputLength = input	
		}
	}
} );
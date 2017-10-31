var module = angular.module('listApp', []);
 module.controller('listController', 
 	function initController($scope) {
    $scope.items = ['First Item'];
    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = undefined;
        }
    }

    // $scope.removeItem = function(index){
    // 	alert('you want to remove' + $scope.items[index]);
    // 	var element = $scope.items[index];
    // 	if($scope.items.includes(element){
    // 		$scope.items.unshift(element);
    // 	});

    // }
}
 );


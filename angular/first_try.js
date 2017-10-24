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
}
 );


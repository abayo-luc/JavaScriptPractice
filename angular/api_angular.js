var module = angular.module('apiApp', []);
var controller = module.controller('apiController', initController);
function initController($scope, $http) {
  $http.get('http://httpbin.org/gzip')
    .then(function(response){
      $scope.resultJSON = JSON.stringify(response);
      $scope.resultProperty = response.data.headers['User-Agent'];
    });
}

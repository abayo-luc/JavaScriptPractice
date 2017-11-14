var module = angular.module('demoApp', [])
module.controller('demoController', function($scope, $http){
	$http.get('https://httpbin.org/user-agent')
		.then(function(response){
			$scope.resultJSON = JSON.stringify(response);
			alert(response.config['url']);
			$scope.resultProperty = response.data;
		});
})
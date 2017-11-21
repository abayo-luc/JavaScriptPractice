app.controller('MainController', function($scope, $http){
	$http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
		.then(function(response, index){
			$scope.photos = response.data;
		});
});
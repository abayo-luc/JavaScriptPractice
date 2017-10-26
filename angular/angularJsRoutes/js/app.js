var app = angular.module('GalleryApp', []);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: 'views/home.html'
	})
	.when('/photos/:id', {
		controller: 'photoController',
		templateUrl: 'views/photo.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
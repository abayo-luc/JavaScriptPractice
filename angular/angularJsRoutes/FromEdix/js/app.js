var app = angular.module('navigationApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'home.html'
        })
        .when('/list', {
            templateUrl : 'list.html',
        })
        .when('/detail/:itemId', {
            templateUrl : 'detail.html',
        })
        .otherwise({redirectTo : "/"});
});
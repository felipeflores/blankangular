angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home/main.html',
		controller: 'homeController'
	});
});
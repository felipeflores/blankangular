angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    
		$stateProvider
		.state('main', {
			abstract: true,
			templateUrl: 'views/main.html'
		})
		.state('main.home', {
			url: '/',
			views: {	
				"" : {
					templateUrl: 'views/home/home.html',
					controller: 'homeController',
					controllerAs: 'vm'
				},				
				"info" : { 
					template: "detalhe"
				},    
			}
		});
});
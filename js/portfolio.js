var myApp = angular.module('myApp', ['ui.router'])

//Config route provider
.config(function($stateProvider, $urlRouterProvider) {
    
    //For any umatched url redirect to home
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/landing.html',
            controller: 'LandingController',
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'templates/projects.html',
            controller: 'ProjectsController',
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController',
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'ContactController',
        })
})

//Landing page controller
.controller('LandingController', function($scope) {
    $scope.text = 'Im in landing.'
})

//Projects page controller
.controller('ProjectsController', function($scope, $http) {
    $http.get('data/portfolio.json')
        .then(function(dat) {
            $scope.data = dat.data;
            console.log($scope.data);
        });
})

//About page controller
.controller('AboutController', function($scope) {
    $scope.text = 'Im in about.'  
})

//Contact page controller
.controller('ContactController', function($scope) {
    $scope.text = "Im in contact."
})
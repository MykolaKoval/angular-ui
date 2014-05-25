'use strict';

angular
    .module('atanorApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/page1.html',
                controller: 'MainController'
            })
            .when('/2', {
                templateUrl: 'views/page2.html',
                controller: 'MainController'
            })
            .when('/3', {
                templateUrl: 'views/page3.html',
                controller: 'MainController'
            })
            .when('/4', {
                templateUrl: 'views/page4.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

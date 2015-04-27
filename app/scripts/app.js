'use strict';
/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular.module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'mailchimp',
    'app.controllers'

]).config(['$routeProvider', '$locationProvider', 
    
    function($routeProvider, $locationProvider) {
        var routes, setRoutes;
        $locationProvider.html5Mode(true);
        routes = [
            'home', 'main', 'features', 'privacy', 'beta', 'press', 
            'we/love-you',
            'design/theme', 'design/moodboard', '404'
        ];
    
        setRoutes = function(route) {
            var config, url;
            url = '/' + route;
            config = {
                templateUrl: 'views/' + route + '.html'
            };
    
            $routeProvider.when(url, config);
            return $routeProvider;
        };
    
        routes.forEach(function(route) {
            return setRoutes(route);
        });
    
        return $routeProvider
        .when('/', {
            redirectTo: '/home'
        }).when('/fG7tNpKU', {
            redirectTo: '/home'
        }).when('/main', {
            redirectTo: '/home'
        }).when('/login/', {
            redirectTo: 'https://beta.writeon.io/login'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);
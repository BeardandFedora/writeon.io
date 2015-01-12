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

]).config([
    '$routeProvider',
    
    function($routeProvider) {
        var routes, setRoutes;
        routes = [
            'main', 'features', 'privacy',
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
            redirectTo: '/main'
        }).when('/fG7tNpKU', {
            redirectTo: '/main'
        }).when('/404', {
            templateUrl: '404.html'
        }).when('/login/', {
            redirectTo: 'https://beta.writeon.io/login'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);
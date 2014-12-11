'use strict';
/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('app.controllers', []).controller(
    'MainCtrl',
    
    function($scope, $location, $routeParams) {
        $scope.full = ($routeParams.fG7tNpKU) ? true : false;
        
}).controller(
    'NavController',
    
    function($scope, $location) {
    $scope.go = function(url) {
        $location.path(url);
    }
    
});
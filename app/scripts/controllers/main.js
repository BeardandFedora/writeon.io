'use strict';
/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('app.controllers', [

]).controller('WriteOnCtrl', function($scope, $location) {
    
    function isMain() {
        return ($location.path() === '/main') || ($location.path() === '/features') ? true : false;
    }
    
    $scope.main = isMain();
    
    $scope.$on('$locationChangeStart', function() {
        $scope.main = isMain();
    });
    
}).controller('MainCtrl', function($scope, $location, $routeParams) {
    $scope.full = ($routeParams.fG7tNpKU) ? true : false;        
        
}).controller('NavController', function($scope, $location) {
    
    $scope.go = function(url) {
        $location.path(url);
    };
    
});
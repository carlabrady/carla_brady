var myApp = angular.module('myApp', ['ngMaterial']);

myApp.config(function($routeProvider, $locationProvider) {
  // $locationProvider.hashPrefix('');

  $routeProvider.when('/', {
      templateUrl: '/views/cb.html',
      controller: 'CbController as vm',
    });
});
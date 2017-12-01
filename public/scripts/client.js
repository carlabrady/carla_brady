var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function($routeProvider, $locationProvider) {
  // $locationProvider.hashPrefix('');

  $routeProvider.when('/', {
      templateUrl: '/views/cb.html',
      controller: 'UserController as uc',
    });
});
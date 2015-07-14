
angular.module('ponto', [
  'ngRoute',
  'ponto.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/ponto/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});

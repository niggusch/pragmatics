(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  pragmaticsApp.config(['$routeProvider','$locationProvider',
      function($routeProvider, $locationProvider) {

          $locationProvider.html5Mode(true);

          $routeProvider.
              when('/', {
                  templateUrl: PragMatics.partialsDir +'/posts.html',
                  controller: 'Posts as vm'
              }).
              when('/:ID', {
                  templateUrl: PragMatics.partialsDir  + 'post.html',
                  controller: 'Post as vm'
              }).
              otherwise({
                  redirectTo: '/'
              });
      }]);



})();

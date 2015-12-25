(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  pragmaticsApp.config(['$routeProvider','$locationProvider','HateoasInterceptorProvider',
      function($routeProvider, $locationProvider, HateoasInterceptorProvider) {
          HateoasInterceptorProvider.transformAllResponses();
          $locationProvider.html5Mode(true);

          $routeProvider.
              when('/', {
                  templateUrl: PragMatics.partialsDir +'/posts.html'

              }).
              when('/:POST_ID', {
                  templateUrl: PragMatics.partialsDir  + 'post.html'

              }).
              when('/pages/:PAGE_ID', {
                  templateUrl: PragMatics.partialsDir  + 'pages.html'

              }).
              when('/pages', {
                  templateUrl: PragMatics.partialsDir  + 'page.html'
              }).
              otherwise({
                  redirectTo: '/'
              });
      }]);



})();

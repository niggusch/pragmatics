(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  pragmaticsApp.config(['$stateProvider','$urlRouterProvider','$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider) {
          $locationProvider.html5Mode(true);

          /*
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
            */
            /*
            $urlRouterProvider

            // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
            // Here we are just setting up some convenience urls.
            .when('/p', '/posts/')
            .when('/p?id', '/posts/:id')
            .when('/posts/:id', '/posts/:id')
            .when('/pages/:id', '/pages/:id')
            .when('/p/:id', '/pag/:id')
            // If the url is ever invalides, e.g. '/asdf', then redirect to '/' aka the home state
            .otherwise('/');
            */

            // New with ui-router
            // Now set up the states
            $stateProvider
            .state('posts', {
              url: "/",
              views: {
                  "posts": {
                    templateUrl: PragMatics.partialsDir +'/posts.html'
                  }
              }
            })
            .state('post', {
              url: "/:POST_ID",
              views: {
                  "posts": {
                    templateUrl: PragMatics.partialsDir +'/post.html'
                  }
              }
            })
            .state('pages', {
              url: "/pages/",
              views: {
                  "pages": {
                    templateUrl: PragMatics.partialsDir +'/pages.html'
                  }
              }
            })
            .state('page', {
              url: "/pages/:PAGE_ID",
              views: {
                  "pages": {
                    templateUrl: PragMatics.partialsDir +'/page.html'
                  }
              }
            })
            ;
      }]);



})();

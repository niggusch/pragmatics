(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  pragmaticsApp.config(['$stateProvider','$urlRouterProvider','$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider

            .state('posts', {
              url: "/posts/",
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

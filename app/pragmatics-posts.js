(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');


  /*
   *  Post controller
   */
  pragmaticsApp.controller('Post', ['$http','$stateParams','$sce','PostsBackend','$rootScope','$state',
  function($http , $stateParams, $sce,postsBackend,$rootScope,$state){

          var that = this;
          that.posts = {};
          that.post = null;
          var promise = null;

          if($stateParams.POST_ID){
            // get single post
            promise = postsBackend.getPost($stateParams.POST_ID);
            promise.then(function (post) {
                  console.log("Promise fullfiled, got single post");
                  that.post= post;
            });
          } else {
            // get all posts
            promise = postsBackend.getPosts();
            promise.then(function (posts) {
                  console.log("Promise fullfiled, got posts");
                  that.posts= posts;
            });
          }

          that.renderTrustedHtml = function(html_code)
          {
              return $sce.trustAsHtml(html_code);
          };
          that.back = function(){
              $state.go($rootScope.previousState);
          }
      }]);

})();

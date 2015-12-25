(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');


  /*
   *  Post controller
   */
  pragmaticsApp.controller('Posts', ['$http','$resource','PostsBackend',function($http,$resource,postsBackend ){
          var that = this;
          var promise = postsBackend.getPosts();
          promise.then(function (posts) {
                console.log("Promise fullfiled, got posts");
                that.posts= posts;
          });

      }]);
  /*
   *  Posts controller
   */
  pragmaticsApp.controller('Post', ['$http','$routeParams','$sce','PostsBackend' ,function($http , $routeParams, $sce,postsBackend){
              var that = this;
              that.renderTrustedHtml = function(html_code)
              {
                  return $sce.trustAsHtml(html_code);
              };

              var promise = postsBackend.getPost($routeParams.POST_ID);
              promise.then(function (post) {
                    console.log("Promise fullfiled, got single post");
                    that.post= post;
              });
      }]);

})();

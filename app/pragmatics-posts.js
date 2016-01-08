(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  /*
   *  Post controller
   */
  pragmaticsApp.controller('Post', ['$http','$stateParams','$sce','PostsBackend','$rootScope','$state',
                            function($http , $stateParams,  $sce,  postsBackend,  $rootScope,  $state ){

                                    var vm = this;
                                    var posts = {};
                                    var post = null;

                                    if($stateParams.POST_ID){
                                      // get single post
                                      var promise = postsBackend.getPost($stateParams.POST_ID);
                                      promise.then(function (result) {
                                            console.log("Promise fullfiled, got single post: "+ angular.toJson(result));
                                            vm.post= result;
                                      });
                                    } else {
                                      // get all posts
                                      var promise = postsBackend.getPosts();
                                      promise.then(function (result) {
                                            console.log("Promise fullfiled, got posts: "+angular.toJson(result));
                                            vm.posts= result;
                                      });

                                    }

                                    vm.renderTrustedHtml = function(html_code)
                                    {
                                        return $sce.trustAsHtml(html_code);
                                    };

                                    vm.back = function(){
                                        $state.go($rootScope.previousState);
                                    }
                                    vm.allowedBack = function(){
                                        return $rootScope.previousState;
                                    }

                                }
                            ]
  );

  // used in partials/post.html
  pragmaticsApp.directive('postTitle', function(){
      return {
          restrict: 'E',
          scope: {
             post: '=post'
           },
          template: '<h1 ng-bind-html="post.title.rendered" animate="bounceInLeft" delay="0.1s"></h1>'
      }
  })
  pragmaticsApp.directive('postContent', function(){
      return {
          restrict: 'E',
          scope: {
             post: '=post'
           },
          template: '<div ng-bind-html="post.content.rendered" animate="bounceInRight" delay="0.1s"></div>'
      }
  })
  pragmaticsApp.directive('pragmaticsPost', function(){
      return {
          restrict: 'E',
          scope: {
             post: '=post'
           },
        templateUrl: PragMatics.templatesDir +'post.html'
      }
  })
  pragmaticsApp.directive('pragmaticsPosts', function(){
      return {
          restrict: 'E',
          scope: {
             posts: '=posts'
           },
        templateUrl: PragMatics.templatesDir +'posts.html'
      }
  })

  pragmaticsApp.directive('pragmaticsCarousel', function(){
      return {
          restrict: 'E',
          scope: {
             id: '@elementId'
           },
        templateUrl: PragMatics.templatesDir +'carousel.html'
      }
  })

  pragmaticsApp.directive('pragmaticsSection', function(){
      return {
          restrict: 'E',
          scope: {
             id: '@elementId',
             color:'@color'
           },
        templateUrl: PragMatics.templatesDir +'section.html'
      }
  })
  pragmaticsApp.directive('pragmaticsUiSection', function(){
      return {
          restrict: 'E',
          scope: {
             id: '@elementId',
             uiView:'@delegateView'

           },
        templateUrl: PragMatics.templatesDir +'ui-section.html'
      }
  })
  pragmaticsApp.directive('pragmaticsStateDebug', function(){
      return {
        restrict: 'E',
        templateUrl: PragMatics.templatesDir +'state-debug.html'
      }
  })
})();

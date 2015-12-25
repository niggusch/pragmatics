(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  pragmaticsApp.controller('Posts', ['$http',function($http ){
          var vm = this;
          console.log("Posts");
          vm.property = "some posts";
          //wp-json/wp/v2/posts
          $http.get('wp-json/wp/v2/posts/').success(
            function(res){
              vm.posts = res;
            }
          );
      }]);

  pragmaticsApp.controller('Post', ['$http','$routeParams','$sce' ,function($http , $routeParams, $sce){
              var vm = this;
              vm.renderTrustedHtml = function(html_code)
              {
                  return $sce.trustAsHtml(html_code);
              };

              console.log("Posts");
              vm.property = "single posts";
              //wp-json/wp/v2/posts
              $http.get('wp-json/wp/v2/posts/' + $routeParams.ID).success(function(res){
            		vm.post = res;
            	});
      }]);

})();

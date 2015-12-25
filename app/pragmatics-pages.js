(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');

  pragmaticsApp.controller('Pages', ['$http','$resource','PostsBackend',function($http,$resource,postsBackend ){
          var vm = this;
          vm.getPages = function(){
            return pages
          }
          var promise = postsBackend.getPages();
          promise.then(function (posts) {
                console.log("Promise fullfiled, got pages");
                vm.pages= pages;
          });

      }]);

  pragmaticsApp.controller('Page', ['$http','$routeParams','$sce','PostsBackend' ,function($http , $routeParams, $sce,postsBackend){
              var vm = this;
              vm.renderTrustedHtml = function(html_code)
              {
                  return $sce.trustAsHtml(html_code);
              };

              var promise = postsBackend.getPage($routeParams.PAGE_ID);
              promise.then(function (page) {
                    console.log("Promise fullfiled, got single page");
                    vm.page= page;
              });

      }]);

})();
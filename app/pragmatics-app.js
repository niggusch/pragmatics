(function() {
  'use strict';

  var pragmaticsApp = angular.module('pragmaticsApp', [
    'ngRoute',
    'ngSanitize'
  ]);


  // set the configuration
  pragmaticsApp.run(['$rootScope', function($rootScope){
    // the following data is fetched from the JavaScript variables created by wp_localize_script(), and stored in the Angular rootScope
    $rootScope.dir = BlogInfo.url;
    $rootScope.site = BlogInfo.site;
    $rootScope.api = AppAPI.url;
    $rootScope.partials = PragMatics.partials;
  }]);


})();

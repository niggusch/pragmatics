(function() {
  'use strict';

  var pragmaticsApp = angular.module('pragmaticsApp',
    [
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'hateoas',
    'ui.router'
    ]
  );

  pragmaticsApp.constant('REST_API_URL', 'http://demo.wp-api.org');
  pragmaticsApp.constant('REST_API_PATH', '/wp-json/wp/v2');


  // set the configuration
  pragmaticsApp.run(['$rootScope',function($rootScope){
    // the following data is fetched from the JavaScript variables created by wp_localize_script(),
    // and stored in the Angular rootScope
    $rootScope.dir = BlogInfo.url;
    $rootScope.site = BlogInfo.site;
    $rootScope.api = AppAPI.url;
    $rootScope.partials = PragMatics.partials;
  }]);


})();

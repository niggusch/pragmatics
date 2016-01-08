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
  pragmaticsApp.run(['$rootScope','$state','$stateParams',function($rootScope, $state, $stateParams){
    // the following data is fetched from the JavaScript variables created by wp_localize_script(),
    // and stored in the Angular rootScope
    $rootScope.dir = BlogInfo.url;
    $rootScope.site = BlogInfo.site;
    $rootScope.api = AppAPI.url;

    $rootScope.partials = PragMatics.partialsDir;
    $rootScope.templates = PragMatics.templatesDir;

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.previousState;
    $rootScope.currentState;
    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
        $rootScope.currentState = to.name;
        console.log('Previous state:'+$rootScope.previousState)
        console.log('Current state:'+$rootScope.currentState)
    });

  }]);


})();

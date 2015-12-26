(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');


  // maybe give it a try: https://github.com/jeffsebring/angular-wp-api, instead of $http

  pragmaticsApp.factory('PostsBackend', ['REST_API_URL', 'REST_API_PATH','$http',
    function (REST_API_URL, REST_API_PATH, $http) {

      //var BACKEND_URL = REST_API_URL+REST_API_PATH;
      var BACKEND_URL = REST_API_PATH;
      //var BACKEND_URL = 'wp-json/wp/v2/posts/';

      return {
          getPosts: getAllPosts,
          getPost:  getSinglePost,
          getPages: getAllPages,
          getPage:  getSinglePage
      };

      function getAllPosts() {
          return $http.get(BACKEND_URL+'/posts/')
              .then(function (response) {
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response.status);
              });
      }

      function getSinglePost(postId) {
          return $http.get(BACKEND_URL+"/posts/"+postId)
              .then(function (response) {
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response);
              });
      }
      function getAllPages() {
          return $http.get(BACKEND_URL+'/pages/')
              .then(function (response) {
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response.status);
              });
      }

      function getSinglePage(pageId) {
          return $http.get(BACKEND_URL+"/"+pageId)
              .then(function (response) {
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response);
              });
      }

  }])


})();

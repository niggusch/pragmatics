(function() {
  'use strict';
  // get the module
  var pragmaticsApp = angular.module('pragmaticsApp');


  // maybe give it a try: https://github.com/jeffsebring/angular-wp-api, instead of $http
  // get comments
  // http://demo.wp-api.org/wp-json/wp/v2/comments?post=9&per_page=2



  pragmaticsApp.factory('PostsBackend', ['REST_API_URL', 'REST_API_PATH','$http',
    function (REST_API_URL, REST_API_PATH, $http) {

      var self = this;


      var BACKEND_URL = REST_API_PATH;

      // 10 items per page is the default WordPress value
      var per_page = 10;
      // first page is the default WordPress value
      var currentPage = 1;
      // initialize this to zero, assuming no posts.
      var totalPages = 0;
      var posts = [];
      var currentPost = null;

      return {
          getPosts: getAllPosts,
          getPost:  getSinglePost,
          getPages: getAllPages,
          getPage:  getSinglePage
      };

      function setPageSize(size){
        self.per_page = size;
      }

      function pageQuery(){
        return "per_page="+self.per_page+"&page="+self.currentPage;
      }

      function hasPreviousPage(){
        return self.currentPages > 1;
      }

      function previousPageQuery(){
        return "per_page="+self.per_page+"&page="+(self.currentPage-1);
      }

      function hasNextPage(){
          return self.currentPages < self.totalPages;
      }

      function nextPageQuery(){
        return "per_page="+self.per_page+"&page="+(self.currentPage+1);
      }
      //
      // if BACKEND_URL is set to 'wp-json/wp/v2';
      // adding '/posts' will lead to full URL for posts.
      //
      function getAllPosts() {
          return $http.get(BACKEND_URL+'/posts/')
              .then(function (response) {
                  console.debug(response);
                  self.totalPages = response.headers('X-WP-TotalPages');
                  console.debug(self.totalPages);
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response.status);
              });
      }

      function getSinglePost(postId) {
         //TODO check if postId is number else use ?filter[name]=' + slug
          return $http.get(BACKEND_URL+"/posts/"+postId)
              .then(function (response) {
                  console.debug(response);
                  self.currentPost = response.data;
                  return self.currentPost;
              })
              .catch(function (response) {
                  console.warn(response);
              });
      }
      function getAllPages() {
          return $http.get(BACKEND_URL+'/pages/')
              .then(function (response) {
                  console.debug(response);
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response.status);
              });
      }

      function getSinglePage(pageId) {
          return $http.get(BACKEND_URL+"/pages/"+pageId)
              .then(function (response) {
                  console.debug(response);
                  return response.data;
              })
              .catch(function (response) {
                  console.warn(response);
              });
      }

  }])


})();

angular.module('flapperNews')

.controller('MainCtrl', [
  '$scope',
  'posts',
  'UserSession',
  function($scope, posts, UserSession){
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      posts.create({
        title: $scope.title,
        body: $scope.body,
        upvotes: 0
      });
      $scope.title = '';
      $scope.body = '';

    };
    $scope.incrementUpvotes = function(post) {
      posts.upvote(post);
    };
    $scope.posts = posts.posts;
    $scope.removePost = function(id) {
      posts.delete(id);
    };
    $scope.userSession = UserSession;

    $scope.error = function(post){
      if($scop.title.length < 5 || $scope.body.length < 10){
        re
      }
    }
}])
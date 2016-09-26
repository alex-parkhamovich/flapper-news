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
}])
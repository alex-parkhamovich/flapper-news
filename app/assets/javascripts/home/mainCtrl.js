angular.module('flapperNews')

.controller('MainCtrl', [
  '$scope',
  'posts',
  'tags',
  'UserSession',
  function($scope, posts, tags, UserSession){
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      posts.create({
        title: $scope.title,
        body: $scope.body,
        post: {
          tags_attributes: $scope.selectedTags
        },
        upvotes: 0
      });
      $scope.title = '';
      $scope.body = '';
      $scope.selectedTags = '';

    };
    $scope.incrementUpvotes = function(post) {
      posts.upvote(post);
    };
    $scope.posts = posts.posts;
    $scope.tags = tags.tags;
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
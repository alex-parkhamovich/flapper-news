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
        post: {
          title: $scope.title,
          body: $scope.body,
          taggings_attributes: {
            0: {
              tag_attributes: $scope.selectedTags,
            }
          },
          upvotes: 0
        }
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

}])
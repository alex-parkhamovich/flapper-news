angular.module('flapperNews')

.factory('posts', [
  '$http',
  function($http){
  var o = {
    posts: []
  };

  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    })
  };

  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .success(function(data){
        post.upvotes += 1;
      });
  };

  o.get = function(id) {
    return $http.get('/posts/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  o.delete = function(id) {
    return $http.delete('/posts/' + id + '.json')
    .success(function(data) {
      for (var i = o.posts.length -1; i>=0; i--) {
        if(o.posts[i].id === id) {
         o.posts.splice(i, 1);
        }
      }
    })
  };

  o.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment);
  };

  o.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
      .success(function(data){
        comment.upvotes += 1;
      });
  };

  o.deleteComment = function(post, comment) {
    return $http.delete('/posts' + post.id + '/comments/' + comment.id + '.json')
    .success(function(data) {
      for (var i = o.comments.length -1; i>=0; i--) {
        if(o.comments[i].id === id) {
         o.comments.splice(i, 1);
        }
      }
    })
  };

  return o;
}])
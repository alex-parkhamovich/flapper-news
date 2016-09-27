angular.module('flapperNews', ['ui.router', 'templates', 'Devise', 'angularVideoBg', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'ngMessages'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '',
        template: "<div ui-view></div>",
        abstract: true,
        resolve: {
          user: (Auth) => {
            return Auth.currentUser()
          }
        }
      })
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          if (Auth.isAuthenticated()) {
            $state.go('home');
          }
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function () {
            $state.go('home');
          })
        }]
      });
    $urlRouterProvider.otherwise('home');
}])

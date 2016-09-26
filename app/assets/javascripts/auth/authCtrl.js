angular.module('flapperNews')

.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
'UserSession',

function($scope, $state, Auth, UserSession){
  $scope.login = function() {
    UserSession.login($scope.user).then(function(){
      $state.go('home');
    });
  };

  $scope.register = function() {
    UserSession.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}])
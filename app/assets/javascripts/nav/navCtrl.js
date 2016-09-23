angular.module('flapperNews')

.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth) {
  $scope.logout = Auth.logout;
  $scope.auth = Auth;
  $scope.signedIn = Auth.isAuthenticated;

  Auth.currentUser()
  .then(function (user) {
    $scope.user = user;
  })
  .catch(function() {

  });

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });
  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });
  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

}]);
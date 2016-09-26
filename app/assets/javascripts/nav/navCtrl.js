angular.module('flapperNews')

.controller('NavCtrl', [
'$scope',
'UserSession',
function($scope, UserSession) {
  $scope.userSession = UserSession;
}]);
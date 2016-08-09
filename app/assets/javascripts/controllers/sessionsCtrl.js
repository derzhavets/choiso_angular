angular.module('choiso')
  .controller('SessionsCtrl', function ($scope, $state, $auth) {
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
  });
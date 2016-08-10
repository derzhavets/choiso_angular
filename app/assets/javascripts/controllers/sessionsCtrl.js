angular.module('choiso')
  .controller('SessionsCtrl', [ '$scope', '$state', '$auth', function ($scope, $state, $auth) {
    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
  }]);
angular.module('choiso')
  .controller('RegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.submitRegistration = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() { 
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
        
     $scope.$on('auth:registration-email-error', function(ev, reason) {
        $scope.error = reason.errors[0];
      });
    };
  }]);
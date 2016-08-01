angular.module('choiso', ['ui.router', 'ui.bootstrap', 'templates', 'ng-token-auth', 'ngResource', 'ui.sortable'])
.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/home');
  });
}]);

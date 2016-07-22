angular.module('choiso', ['ui.router', 'ui.bootstrap', 'templates', 'ng-token-auth'])

.config([
    '$stateProvider', 
    '$urlRouterProvider', 
    function($stateProvider, urlRouterProvider){
       $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/welcome/home.html',
                controller: 'HomeCtrl',
                resolve: {
                  alternatives: ['alternatives', function(alternatives){
                    return alternatives.getAll();
                  }]
                }
            })
            
            .state('sign_in', {
                url: '/sign_in',
                templateUrl: 'views/user_sessions/new.html',
                controller: 'SessionsCtrl'
            })
            
            .state('sign_up', {
                url: '/sign_up',
                templateUrl: 'views/user_registrations/new.html',
                controller: 'RegistrationsCtrl'
            });
    }
])

.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/home');
  });
}]);

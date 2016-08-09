angular.module('choiso')
.config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('sign_in', {
            url: '/sign_in',
            templateUrl: 'views/user_sessions/new.html',
            controller: 'SessionsCtrl'
        })
        
        .state('sign_up', {
            url: '/sign_up',
            templateUrl: 'views/user_registrations/new.html',
            controller: 'RegistrationsCtrl'
        })
        
        .state('home', {
          url: '/home',
          templateUrl: 'views/welcome/home.html',
          controller: 'HomeController',
          resolve: {
            auth: function($auth, $state){
              return $auth.validateUser().catch(function(){
                $state.go('start');
              });
            }
          }
        })
        
        .state('users', {
          url: '/users/{id}',
          templateUrl: 'views/users/show.html',
          controller: 'UserShowController',
          resolve: {
            auth: function($auth){
              return $auth.validateUser();
            }
          }
        })
        
        .state('start', {
          url: '/welcome',
          templateUrl: 'views/welcome/start.html'
        });
        
      $urlRouterProvider.otherwise("/home");
      }
      
]);
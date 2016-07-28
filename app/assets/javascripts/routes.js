angular.module('choiso')
.config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, urlRouterProvider){
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
            auth: function($auth){
              return $auth.validateUser();
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
        });

      } 
])

.service( 'getUserID', function($rootScope, $q) {
  var deferred = $q.defer();
  var unwatch = $rootScope.$watch('user.id', function(id) {
    if (angular.isDefined(id)) {
      // resolve the promise, as it seems to be defined now
      deferred.resolve(id);
      // remove the watch, because there's no more use for it
      unwatch();
    }
  });
  return function () {
    return deferred.promise;
  };
})
angular.module('choiso')
.factory('User', ['$resource', function($resource){
  return $resource('/users/:userId.json', { userId: "@userId"});
}]);
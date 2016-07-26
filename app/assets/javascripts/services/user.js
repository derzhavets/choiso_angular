angular.module('choiso').factory('User', function($resource){
  return $resource('/users/:userId.json', { userId: "@userId"});
})
angular.module('choiso')
.factory('Proposal', ['$resource', function($resource){
  return $resource('/users/:userId/proposals.json', {
    userId: "@userId", 
    resource_name: "@resource_name",
  });
}]);
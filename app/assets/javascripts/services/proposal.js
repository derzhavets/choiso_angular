angular.module('choiso').factory('Proposal', function($resource){
  return $resource('/users/:userId/proposals.json', {
    userId: "@userId", 
    resource_name: "@resource_name",
  });
});
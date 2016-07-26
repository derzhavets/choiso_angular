angular.module('choiso').factory('Alternative', function($resource){
  return $resource('/users/:userId/alternatives/:alternativeId.json', {
    userId: "@userId", 
    alternativeId: "@alternativeId",
    proposer_id: "@proposerId"
  });
});
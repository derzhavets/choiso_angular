angular.module('choiso').controller('OwnAlternativesController', function(Alternative, $scope){
  $scope.alternatives = Alternative.query({userId: $scope.user.id});
});
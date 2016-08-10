angular.module('choiso')
.controller('AlternativesProposeController', [ 'Alternative', 'User', '$scope', '$stateParams', function(Alternative, User, $scope, $stateParams){
  $scope.friend = User.get({userId: $stateParams.id}, function(){
    $scope.alternatives = Alternative.query({
      userId: $scope.friend.id,
      proposer_id: $scope.user.id
    });
  });
  
  $scope.createAlternative = function(alternative){
  
    var alt = new Alternative(alternative);
    alt.proposer_id = $scope.user.id;
          
    alt.$save({userId: $scope.friend.id})
    .finally(function(data){
      $scope.alternatives.push(alternative);
      $("#newAlternative")[0].reset();
    });
  };
  
  $scope.destroyAlternative = function(alternative, idx){
    var alt = Alternative.get(
      { alternativeId: alternative.id, userId: $scope.friend.id },
      function(){
        alt.$delete({ alternativeId: alternative.id, userId: $scope.friend.id })
        .finally(function(){
          $scope.alternatives.splice(idx, 1);
        });  
      }
    );
  };
  
}]);
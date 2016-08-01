angular.module('choiso')
  .directive('ownAlternatives', function(){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/alternatives/own.html',
      controller: function($scope){
        $scope.alternatives = [];
        
        $scope.createAlternative = function(){
          $scope.alternatives.push({
            id: Math.floor((Math.random() * 100) + 1),
            name: $scope.newAlternative.name,
            user_id: $scope.user.id,
            proposer_id: $scope.user.id,
            requirements: [],
            criticalPoints: []
          });
          $scope.newAlternative.name = "";
        };
        
        $scope.printScope = function(){
          console.log($scope);
        }
      }
    };
  })
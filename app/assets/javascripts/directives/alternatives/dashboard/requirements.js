angular.module('choiso')
.directive('alternativeDashboardRequirements', ['$rootScope', function($rootScope){
  return {
    restrict: 'E',
    templateUrl: 'views/alternatives/dashboard/requirements.html',
    scope: {
      alternative: "="
    },
    link: function(scope, element, attrs){
      
      scope.createRequirement = function(){
        scope.alternative.requirements.push({
          name: scope.newRequirement.name,
          id: Math.floor((Math.random() * 100) + 1),
          user_id: $rootScope.user.id,
          proposer_id: $rootScope.user.id
        });
        scope.newRequirement.name = "";
      };
      
      scope.destroyRequirement = function(requirement){
        var index = scope.alternative.requirements.indexOf(requirement);
        scope.alternative.requirements.splice(index, 1);
      };
      
    }
  };
}]);
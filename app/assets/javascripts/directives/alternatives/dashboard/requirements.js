angular.module('choiso')
.directive('alternativeDashboardRequirements', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/alternatives/dashboard/requirements.html',
    scope: {
      alternative: "="
    }
  };
});
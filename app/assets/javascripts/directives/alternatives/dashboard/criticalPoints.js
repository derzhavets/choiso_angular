angular.module('choiso')
.directive('alternativeDashboardCriticalpoints', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/alternatives/dashboard/criticalPoints.html',
    scope: {
      alternative: "="
    },
    link: function(scope, element, attrs){
      
    }
  };
});
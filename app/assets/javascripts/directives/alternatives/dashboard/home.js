angular.module('choiso')
.directive('alternativeDashboardHome', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/alternatives/dashboard/home.html',
    scope: {
      alternative: "="
    }
  };
});
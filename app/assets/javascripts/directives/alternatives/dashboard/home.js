angular.module('choiso')
.directive('alternativeDashboardHome', function($rootScope){
  return {
    restrict: 'E',
    templateUrl: 'views/alternatives/dashboard/home.html',
    scope: {
      alternative: "="
    }
  };
});
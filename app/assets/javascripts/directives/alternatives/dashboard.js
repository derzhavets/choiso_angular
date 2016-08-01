angular.module('choiso')
.directive('alternativeDashboard', function(Alternative){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/alternatives/dashboard.html',
    scope: {
      alternative: "="
    },
    require: "?ngModel",
    link: function(scope, element, attrs, ngModelCtrl){
    }
  };
});
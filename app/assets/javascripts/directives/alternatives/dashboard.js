angular.module('choiso')
.directive('alternativeDashboard', ['Alternative', function(Alternative){
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
}]);
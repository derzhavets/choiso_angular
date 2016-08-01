angular.module('choiso')
.directive('alternativesNavtabs', function(){
  return {
    replace: true,
    restrict: 'E',
    require: "?ngModel",
    templateUrl: 'views/alternatives/navtabs.html',
    link: function(scope, element, attrs, ngModelCtrl){
      var activeAlternative = {};
      
      scope.alternativeActive = function(alternative){
        return activeAlternative && activeAlternative.id === alternative.id;
      };
      
      scope.toggleAlternative = function(alternative){
        activeAlternative = alternative;
        ngModelCtrl.$setViewValue(activeAlternative);      
      };
      
      ngModelCtrl.$render = function(){
        activeAlternative = ngModelCtrl.$viewValue;
      };
      
    }
  };
});
angular.module('choiso')
.directive('evaluationScale', function($timeout){
  return {
    restrict: 'E',
    templateUrl: 'views/shared/evaluationScale.html',
    scope: {
      scale: "=",
      evaluable: "="
    },
    link: function(scope, element, attrs){
      
      scope.getNumber = function(num) {
          return new Array(num);   
      };
      
      scope.setHoverClass = function(hoverMark){
        scope.storedEvaluation = scope.evaluable.lastEvaluation;
        scope.evaluable.lastEvaluation = hoverMark;
      };
      
      scope.resetHoverClass = function(){
        scope.evaluable.lastEvaluation = scope.storedEvaluation;
      };
      
      scope.storeValue = function(value){
        scope.evaluable.lastEvaluation = value;
        scope.storedEvaluation = value;
      };
      
    }};      
})
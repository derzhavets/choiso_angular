angular.module('choiso')
.directive('evaluationScale', function($timeout){
  return {
    restrict: 'E',
    // replace: true,
    templateUrl: 'views/layouts/evaluationScale.html',
    scope: {
      scale: "=",
      evaluable: "="
    },
    link: function(scope, element, attrs){
      
      scope.resource = attrs.evaluable;
      
      scope.getNumber = function(num) {
          return new Array(num);   
      };
      
      scope.setActiveMarks = function(value){
        scope.active = [];
        
        for (i = 0; i < attrs.scale; i++) { 
            if (i <= (value - 1) ) {
              scope.active[i] = true;
            } else {
              scope.active[i] = false;
            }
        }
      };
      
      scope.storeValue = function(value){
        scope.evaluable.lastEvaluation = value;
      };
      
      scope.$watch('evaluable.lastEvaluation', function(newValue, oldValue){
        if (newValue) {
          scope.setActiveMarks(newValue);
        }
      });
      
    }};      
})
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
      scope.destroyAlternative = function(alternative){
        var alt = Alternative.get(
          { alternativeId: alternative.id, userId: scope.$parent.user.id },
          function(){
            alt.$delete({ alternativeId: alternative.id, userId: scope.$parent.user.id })
            .finally(function(){
              var index = scope.$parent.alternatives.indexOf(alternative);
              scope.$parent.alternatives.splice(index, 1);
              scope.$parent.activeAlternative = {};
            });  
          }
        );
      };
      
    }
  };
});
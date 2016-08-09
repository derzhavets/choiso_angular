angular.module('choiso')
.directive('traitListDashboard', function($rootScope, $timeout){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/traits/dashboard.html',
    scope: {
      list: "=",
      alternative: "="
    },
    link: function(scope, element, attrs, ngModelCtrl){
      
      scope.createTrait = function(){
        var trait = {
          name: scope.newTrait.name,
          listName: scope.list.name,
          id: Math.floor((Math.random() * 100) + 1),
          user_id: $rootScope.user.id,
          proposer_id: $rootScope.user.id
        };
        
        scope.list.attributes.push(trait);
        scope.list.sourceList = scope.list.attributes.slice();
        
        scope.newTrait.name = "";
      };
      
      scope.destroyTrait = function(attribute){
        var index1 = scope.list.attributes.indexOf(attribute);
        scope.list.attributes.splice(index1, 1);
        scope.list.sourceList = scope.list.attributes.slice();
        
        var index2 = scope.alternative.criticalPoints.indexOf(attribute);
        scope.alternative.criticalPoints.splice(index2, 1)
      };
      
      scope.setActiveProposal = function(resource_name){
        scope.$parent.setActiveProposal(resource_name);
      };
      
      // Sortable functions
      
      scope.sortableOptions = {
        cancel: ".sortable-used",
        placeholder: "trait-placeholder",
        connectWith: ".critical-points-container",
        update: function(){
          scope.list.sourceList = scope.list.attributes.slice();
        }
      };
    }
  };
});
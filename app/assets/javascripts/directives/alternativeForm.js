angular.module('choiso')
.directive('alternativeForm', function(Alternative){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/alternatives/form.html',
    link: function(scope, element, attrs){
      scope.createAlternative = function(alternative){
        var alt = new Alternative(alternative);
        alt.proposer_id = scope.user.id;
              
        alt.$save({userId: scope.user.id})
        .finally(function(data){
          scope.alternatives.push(alternative);
          $("#newAlternative")[0].reset();
        });
      };
      
      scope.destroyAlternative = function(alternative, idx){
        var alt = Alternative.get(
          { alternativeId: alternative.id, userId: scope.user.id },
          function(){
            alt.$delete({ alternativeId: alternative.id, userId: scope.user.id })
            .finally(function(){
              scope.alternatives.splice(idx, 1);
            });  
          }
        );
      };
      
      
    }
  };
});
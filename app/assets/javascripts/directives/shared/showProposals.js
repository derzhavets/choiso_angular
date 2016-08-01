angular.module('choiso')
  .directive('showProposals', function(Proposal){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/shared/proposals.html',
      link: function(scope, element, attrs){
        scope.proposals = Proposal.query({
          userId: scope.user.id,
          resource_name: "alternatives"
        });
      }
    };
  })
angular.module('choiso')
  .directive('showProposals', function($timeout){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/shared/proposals.html',
      link: function(scope, element, attrs){
        
        // Default proposals
        $timeout(function(){
          scope.activeProposals = scope.proposals.alternatives;
          scope.activeProposals.resourceName = "alternatives";
        }, 1000);
        
        scope.proposals = {
          alternatives: [
            {
              proposer: "John Smith",
              proposals: ["Enginner", "Veterinar", "Doctor"]
            },
            {
              proposer: "Eva Greenberg",
              proposals: ["Get rich", "Or die trying", "Be jewish"]
            },
            {
              proposer: "Mark Ronson",
              proposals: ["Open music label", "Steal music", "Play banjo"]
            }
          ],
          strengths: [
            {
              proposer: "Rita Margarita",
              proposals: ["Good in math", "Strong", "Peaceful"]
            },
            {
              proposer: "Lidsey Lohnah",
              proposals: ["Big head", "Manual skills", "Logic"]
            },
            {
              proposer: "John Smith",
              proposals: ["Just", "Calm", "Good hair"]
            }
          ],
          weaknesses: [
            {
              proposer: "Mark Antony",
              proposals: ["Stupid", "Weak in math", "Agressive"]
            },
            {
              proposer: "Mashka Kakashka",
              proposals: ["Weak in logic", "Not team player", "Take drugs"]
            },
            {
              proposer: "Sonny Chick",
              proposals: ["Dumb", "Play rules", "Fat"]
            }
          ]
        };
        
        // scope.proposals = Proposal.query({
        //   userId: scope.user.id,
        //   resource_name: "alternatives"
        // });
        
        scope.setActiveProposal = function(resource_name){
          scope.activeProposals = scope.proposals[resource_name];
          scope.activeProposals.resourceName = resource_name;
        };
      }
    };
  })
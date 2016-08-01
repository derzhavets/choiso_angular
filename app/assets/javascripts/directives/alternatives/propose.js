angular.module('choiso')
  .directive('proposeAlternatives', function(){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/alternatives/propose.html',
      controller: 'AlternativesProposeController'
    };
  })
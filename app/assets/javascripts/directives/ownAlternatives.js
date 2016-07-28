angular.module('choiso')
  .directive('ownAlternatives', function(Alternative){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/alternatives/index.html',
      controller: 'OwnAlternativesController'
    };
  })
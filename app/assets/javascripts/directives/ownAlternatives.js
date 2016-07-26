angular.module('choiso')
  .directive('ownAlternatives', function(){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/alternatives/index.html',
      controller: 'AlternativesIndexController'
    };
  })
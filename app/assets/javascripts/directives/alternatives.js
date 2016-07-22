angular.module('choiso')
  .directive('alternatives', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/alternatives/index.html',
      controller: 'AlternativesCtrl'
    };
  })
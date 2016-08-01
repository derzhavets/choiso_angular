angular.module('choiso')
  .directive('ownTraits', function(){
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'views/traits/own.html',
      controller: function($scope){
        $scope.traitsLists = [
          {
            name: "Strengths",
            attributes: []
          },
          {
            name: "Weaknesses",
            attributes: []
          },
          {
            name: "Circumstances",
            attributes: []
          },
          {
            name: "Wishes",
            attributes: []
          }
        ];
        
      }
    };
  })
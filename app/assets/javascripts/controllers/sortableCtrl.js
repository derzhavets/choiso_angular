angular.module('choiso')
.controller('sortableController', ['$scope', function($scope){
    
    $scope.sortableOptions = {
      placeholder: "trait-placeholder",
      connectWith: ".critical-points-container",
    };
}])
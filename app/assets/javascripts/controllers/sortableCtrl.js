angular.module('choiso')
.controller('sortableController', function($scope){
    
    $scope.sortableOptions = {
      placeholder: "trait-placeholder",
      connectWith: ".critical-points-container",
    };
})
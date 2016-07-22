angular.module('choiso')
  .directive("navBar", function() {
      return {
        restrict: 'E',
        templateUrl: "views/layouts/navbar.html"
      };
  })
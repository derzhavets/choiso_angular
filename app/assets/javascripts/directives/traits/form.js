angular.module('choiso')
.directive('traitForm', function(Alternative){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/traits/form.html',
    scope: {
      list: "="
    }
  };
});
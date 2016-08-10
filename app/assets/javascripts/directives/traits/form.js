angular.module('choiso')
.directive('traitForm', function(){
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/traits/form.html',
    scope: {
      list: "="
    }
  };
});
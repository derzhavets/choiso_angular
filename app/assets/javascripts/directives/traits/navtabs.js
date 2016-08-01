angular.module('choiso')
.directive('traitsNavtabs', function(){
  return {
    replace: true,
    restrict: 'E',
    require: "?ngModel",
    templateUrl: 'views/traits/navtabs.html',
    link: function(scope, element, attrs, ngModelCtrl){
     
      var activeList = {};
      
      scope.listActive = function(list){
        return activeList && activeList.name === list.name;
      };
    
      scope.toggleList = function(list){
        activeList = list;
        ngModelCtrl.$setViewValue(activeList);      
      };
      
      ngModelCtrl.$render = function(){
        activeList = ngModelCtrl.$viewValue;
      };
      
    }
  };
});
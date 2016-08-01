angular.module('choiso')
.directive('alternativeDashboardTab', function(){
  return {
    restrict: 'E',
    scope: {
      title: "@"
    },
    transclude: true,
    template: "<div ng-show='selected' ng-transclude=''></div>",
    require: "^alternativeDashboardNavtabs",
    link: function(scope, element, attrs, ctrl){
      ctrl.addTab(scope);
    }
  };
});
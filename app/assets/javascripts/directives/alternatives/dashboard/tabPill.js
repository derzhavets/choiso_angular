angular.module('choiso')
.directive('tabPill', function(){
  return {
    restrict: 'E',
    scope: {
      title: "@"
    },
    transclude: true,
    template: "<div ng-show='selected' ng-transclude=''></div>",
    require: "^alternativeDashboardTabgroup",
    link: function(scope, element, attrs, ctrl){
      ctrl.addTab(scope);
    }
  };
});
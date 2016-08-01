angular.module('choiso')
.directive('alternativeDashboardNavtabs', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="col-md-10"><ul class="nav nav-pills"><li ng-repeat="tab in tabs" role="presentation" ng-class="{active: tab.selected}"> <a href="" ng-click="select(tab)">{{tab.title}}</a></li><ul></div>'
    + '<div ng-transclude=""></div>',
    controller: function($scope){
      $scope.tabs = [];
      this.addTab = function(tab){
        if($scope.tabs.length == 0) {
          tab.selected = true;
        }
        $scope.tabs.push(tab);
      };
      
      $scope.select = function(tab){
        angular.forEach($scope.tabs, function(eachTab){
          eachTab.selected = angular.equals(tab, eachTab);
        });
      };
    }
  };
});
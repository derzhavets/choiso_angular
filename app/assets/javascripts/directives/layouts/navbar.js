angular.module('choiso')
  .directive("navBar", function() {
      return {
        restrict: 'E',
        templateUrl: "views/layouts/navbar.html",
        controller: ['$scope', '$auth', '$state', function($scope, $auth, $state){
          
          // Initialize
          
          $scope.alternativesBlockActive = true;
          $scope.mirrorBlockActive = false;
          $scope.analyzeBlockActive = false;
          $scope.proposalsBlockActive = true;
          
          $scope.toggleActiveBlock = function(resource){
            var block = resource + "BlockActive";
            $scope[block] = $scope[block] ? false: true;
          };
          
          $scope.printScope = function(){
            console.log($scope);
          };
          
              
          $scope.logOut = function() {
            $auth.signOut()
              .then(function(resp) {
                $state.go('start');
              })
              .catch(function(resp) {
                // handle error response
              });
          };
          
          
          
        }]
      };
  })
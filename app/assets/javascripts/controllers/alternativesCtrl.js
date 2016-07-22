angular.module('choiso')
  .factory('alternatives', ['$http', '$rootScope', function($http, $rootScope){
    var o = {
      alternatives: []
    };
    
    o.getAll = function(){
      
      console.log($rootScope.user);
      //return $http.get('/users/' + user.id + '/alternatives.json').success(function(data){
      //  angulåar.copy(data, o.alternatives);
      //});
    };
    
    o.create = function(user, alternative) {
      return $http.post('/users/' + user.id + '/alternatives.json', alternative).success(function(data){
        o.alternatives.push(data);
      });
    };
    
    o.destroy = function(alternative) {
      return $http.delete('/alternatives/' + alternative.id + '.json');
    };
    
    return o;
  }])
  
  .controller('AlternativesCtrl', [
    '$scope',
    'alternatives',
    function($scope, alternatives){
      $scope.alternatives = alternatives.alternatives;
      
      $scope.addAlternative = function(){
        if(!$scope.name || $scope.name === "") {return;}
        alternatives.create($scope.user,{name: $scope.name});
        $scope.name = "";
      };
      
      $scope.destroyAlternative = function(alternative, idx){
        alternatives.destroy(alternative);
        $scope.alternatives.splice(idx, 1);     
      };
    }
  ]);
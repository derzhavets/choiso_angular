angular.module('choiso')
  .controller('AlternativesCtrl', function(){
  })
  
  .factory('alternatives', [$http, function($http){
    var o = {
      alternatives: []
    };
    
    o.getAll = function(){
      return $http.get('/alternatives.json').success(function(data){
        angular.copy(data, o.alternatives)
      })
    }
  }]);
angular.module('myApp', []).
  controller('myController', ['$scope', '$http', 
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });

    $scope.addProj() {
       var newUrl = {
         "name" : $scope.name,
         "title" : $scope.title,
         "photo" : $scope.foto
       }
       
    }

  }]);

angular.module('myApp', [])
 .controller('myController', ['$scope', '$http', 
                              function($scope, $http) {

    console.log("in my app");
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });

    $scope.addProj = function() {
       console.log("in project");
       var newUrl = {
         "name" : $scope.name,
         "title" : $scope.title,
         "foto" : $scope.foto,
         "url" : $scope.url
       };
       $scope.user.urls += newUrl;
       console.log($scope.user._id);
       $http.post('/user/update', $scope.user)
          .success(function(data) {
            console.log('success');
         });

       console.log(newUrl);
      // $http.put('/user/' + $scope.user._id + 'updateUrl', newUrl).success(function(data){
        //  console.log('success');
      // }); 
       
    };

  }]);

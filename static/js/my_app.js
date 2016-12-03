angular.module('myApp', [])
 .controller('myController', ['$scope', '$http', 
                              function($scope, $http) {
    $scope.urls = [];
    $scope.titles = [];
    $scope.names = [];
    $scope.images = [];
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

       if(newUrl.foto == '' || newUrl.foto == undefined){
         newUrl.foto = "http://shushi168.com/data/out/123/36699123-images.png";
       }
       $scope.user.urls += newUrl;
       console.log($scope.user._id);
       console.log($scope.user.urls.length);
       $http.post('/user/update', $scope.user)
          .success(function(data) {
            console.log('success');
         });

       console.log(newUrl);
       $scope.urls += newUrl.url;
       $scope.names += newUrl.name;
       $scope.titles += newUrl.title;
       $scope.images += newUrl.images;
      // $http.put('/user/' + $scope.user._id + 'updateUrl', newUrl).success(function(data){
        //  console.log('success');
      // }); 
       
    };

  }]);

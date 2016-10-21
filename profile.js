app.controller('ProfileCtrl', function($scope, $http){


    $http.get("/user_show")
    .success(function(users)
    {
        $scope.users = users;
    });

    $scope.remove = function(user)
      {
          $http.delete('/user_delete'+user.username,user)
          .success(function(users){
             $scope.users = users;
          });
      }


    $scope.update = function(user)
    {
        $http.put('/user_edit'+user.username,user)
        .success(function(users){
            $scope.users = users;
        });
    }

    $scope.add = function(user)
    {
        $http.post('/user_add', user)
        .success(function(users){
            $scope.users = users;

        });
    }

    $scope.select = function(user)
    {
        $scope.user = user;
    }

    $scope.submit = function(file){
      console.log($scope.file);
    };
});

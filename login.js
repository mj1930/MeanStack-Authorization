

app.controller("LoginCtrl", function($scope, $http, $location, $rootScope){
    $scope.login = function(user){
        console.log(user);

        $http.post("/login", user)
        .success(function(response){
            console.log(response);


            $rootScope.currentUser=response;

            if(response.type == 0){
               $location.url("/admin");
            }
            else if(response.type == 1){
               $location.url("/admin");
            }
            else{
              $location.url("/admin");

          }
        });

    }
    $scope.email_send = function(user){
        $http.post('/email',user)
        .success(function(response){
          console.log(response);
          $rootScope.msg=response;
        })
    }
});

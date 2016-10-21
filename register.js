
var app= angular.module('RegisterCtrl', []);
app.controller('RegisterCtrl',['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
    $scope.register = function(user){
        console.log(user);
        if(user.password != user.password2 || !user.password || !user.password2)
        {
            $rootScope.message = "Your passwords don't match";
        }
        else
        {
            $http.post("/register", user)
            .success(function(response){
                console.log(response);
                if(response != null)
                {
                    $rootScope.currentUser = response;
                    $location.url("/profile");
                    $rootScope.successmsg = "User is Successfully Registered"
                }
                else{
                   $rootScope.errormsg = "User is already Registered"
                }
            });
        }
    }
}]);

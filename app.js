
var app = angular.module("PassportApp", ["ngRoute",'RegisterCtrl']);

app.config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/home', {
          templateUrl: 'views/home/home.html',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/contact', {
          templateUrl: 'views/contact/contact.html',
          controller: 'LoginCtrl'
      })
      .when('/profile', {
          templateUrl: 'views/profile/profile.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/login', {
          templateUrl: 'views/login/login.html',
          controller: 'LoginCtrl'
      })
      .when('/register', {
          templateUrl: 'views/register/register.html',
          controller: 'RegisterCtrl'
      })
      .when('/admin', {
          templateUrl: 'views/profile/admin.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/subadmin', {
          templateUrl: 'views/profile/subadmin.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/adminusers', {
          templateUrl: 'views/profile/adminusers.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/adminupdate', {
          templateUrl: 'views/profile/adminupdate.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/subadminusers', {
          templateUrl: 'views/profile/adminusers.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .when('/subadminupdate', {
          templateUrl: 'views/profile/adminupdate.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .otherwise({
          redirectTo: '/home'
      });
});

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;

        if (user !== '0')
        {
            $rootScope.currentUser = user;
            deferred.resolve();
        }

        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};

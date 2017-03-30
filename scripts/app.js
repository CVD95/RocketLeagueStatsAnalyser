var rlStatsAnalyserAppFilters = angular.module('rlStatsAnalyserApp.filters', []);
var rlStatsAnalyserAppServices = angular.module('rlStatsAnalyserApp.services', []);

var rlStatsAnalyserApp = angular.module('rlStatsAnalyserApp', ['ngRoute', 'rlStatsAnalyserApp.filters', 'rlStatsAnalyserApp.services']);

rlStatsAnalyserApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/matches', {
            templateUrl: 'views/matches.html',
            controller: 'MatchController'
        })
        .when('/match/:id', {
            templateUrl: 'views/match.html',
            controller: 'MatchController'
        })
        .when('/addmatch', {
            templateUrl : 'views/addmatch.html',
            controller : 'MatchController'
        })
        .when('/login', {
            templateUrl : 'views/login.html',
            controller : 'UserController'
        })
        .when('/register', {
            templateUrl : 'views/register.html',
            controller : 'UserController'
        })
        .when('/account', {
            templateUrl : 'views/account.html',
            controller : 'UserController'
        })
        .otherwise({ redirectTo: '/home' });
});

rlStatsAnalyserApp.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if (JSON.parse(localStorage.getItem("currentuser")) == undefined) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "views/login.html" || next.templateUrl == "views/register.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path("/login");
        }
      }
      else if ( next.templateUrl == "views/login.html" ) {
          $location.path("/account");
      }   
    });
 })
rlStatsAnalyserApp.controller('HomeController', function($rootScope, $scope, UserService) {
    $rootScope.pageTitle = "Home";
	$rootScope.currentuser = JSON.parse(localStorage.getItem("currentuser"));
    $rootScope.loggedIn = ($rootScope.currentuser != undefined);
    if($rootScope.loggedIn){
       $rootScope.loggedIn = ($rootScope.currentuser.username.length > 0);
    }
});
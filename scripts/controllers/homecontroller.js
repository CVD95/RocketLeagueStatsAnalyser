rlStatsAnalyserApp.controller('HomeController', function($rootScope, $scope, UserService) {
    $rootScope.pageTitle = "Home";
	$rootScope.currentuser = UserService.getCurrentUser();
    $rootScope.loggedIn = UserService.loggedIn();
});
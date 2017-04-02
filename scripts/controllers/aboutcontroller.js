rlStatsAnalyserApp.controller('AboutController', function($rootScope, $scope, UserService) {
    $rootScope.pageTitle = "About";
    $rootScope.currentuser = UserService.getCurrentUser();
    $rootScope.loggedIn = UserService.loggedIn();
});
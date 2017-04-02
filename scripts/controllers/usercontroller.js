rlStatsAnalyserApp.controller('UserController', function($rootScope, $scope, $location, UserService) {
	$scope.pageTitle = "Login";

	$scope.loginMessage ="";
	$rootScope.currentuser = UserService.getCurrentUser();
    $rootScope.loggedIn = UserService.loggedIn();
	console.log($rootScope.currentuser);
	console.log($rootScope.loggedIn);
	$scope.users = [];
	var localusers = JSON.parse(localStorage.getItem("users"));

	if(localusers != undefined && localusers.length>0) {
		$scope.users = localusers;
	}

	$scope.ranks = [
		"Challenger Elite",
		"Rising Star",
		"All-Star",
		"Shooting Star",
		"Superstar",
		"Champion",
		"Super Champion"
	];

	$scope.saveUser = function() {
		console.log($scope.user);
		$scope.users.push({
			username: $scope.user.username,
			password: $scope.user.password,
			rank: $scope.user.rank
		});
		localStorage.setItem("users", JSON.stringify($scope.users));
		$location.path("/login");
	};

	$scope.getMaxId = function(userArray){
		if(userArray != undefined && userArray.length>0) {
			return Math.max.apply(Math,$scope.users.map(function(userArray){return userArray.id;}));
		}
		else{
			return 0;
		}
	}

    $scope.updateUser = function(currentuser) {
		currentuser.updating=false;
		localStorage.setItem("users", JSON.stringify($scope.users));
	};
 $scope.deleteUser = function(user) {
		var deleteIndex = -1;
		$scope.users.forEach(function(e, i) {
			if(e.name === user.name) {
				deleteIndex = i;
			}
		});
        console.log(deleteIndex);
		$scope.users.splice(deleteIndex, 1);
		localStorage.setItem("users", JSON.stringify($scope.users));
	};

    $scope.login = function() {
		UserService.login($scope.user.username, $scope.user.password);
		$rootScope.currentuser = UserService.getCurrentUser();
		$rootScope.loggedIn = UserService.loggedIn();
		if(!$rootScope.loggedIn){
			$scope.loginMessage = "Unknown username or password";
		}
		else{
			$location.path("/account");
		}
    };
	$scope.logout = function() {
		UserService.logout();
		$location.path("/login");
    };
});
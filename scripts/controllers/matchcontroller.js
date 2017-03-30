rlStatsAnalyserApp.controller('MatchController', function($scope, $location, $routeParams, UserService) {
	$scope.pageTitle = "Matches";
	$scope.types = ["1v1", "2v2", "3v3", "Solo 3v3", "4v4", "Snow Day", "Hoops"];
	$scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	$scope.cars= [
		"Octane",
		"Octane ZSR",
		"Breakout",
		"X-Devil MK2",
		"Dominus GT",
		"Takumi RX-T",
		"Breakout Type-s"
	].sort();

	$scope.boosts= [
		"Toon",
		"Hearts",
		"Ligthning",
		"Ligthning Yellow",
		"Frostbite",
		"Smoke",
		"Thermal",
		"Ion",
		"Flamethrower",
		"Flowers",
		"Datastream",
		"Hydro",
		"Ink",
		"Plasma",
		"Ice",
		"Dark Matter"
	].sort();;
	$scope.matches = [];
	$scope.currentMatch;
	var currentId = $routeParams.id;
	var localmatches = JSON.parse(localStorage.getItem("matches"));

	if(localmatches != undefined && localmatches.length>0) {
		$scope.matches = localmatches;
	}

	if(currentId != undefined){
		localmatches.forEach(function(element) {
			if(element.id == currentId){
				$scope.currentMatch = element;
			}
		}, this);
	}
    $scope.deleteMatch = function(match) {
		var deleteIndex = -1;
		$scope.matches.forEach(function(e, i) {
			if(e.name === match.name) {
				deleteIndex = i;
			}
		});
        console.log(deleteIndex);
		$scope.matches.splice(deleteIndex, 1);
		localStorage.setItem("matches", JSON.stringify($scope.matches));
	};

    $scope.saveMatch = function() {
		console.log($scope.newMatch);
		var maxId = $scope.getMaxId($scope.matches);
		$scope.matches.push({
			id: maxId +1,
			type: $scope.newMatch.type,
			competitive: $scope.newMatch.competitive,
			result: $scope.newMatch.result,
			timestarted: new Date($scope.newMatch.timestarted),
			dayoftheweek:$scope.newMatch.dayoftheweek,
			music: $scope.newMatch.music,
			score: $scope.newMatch.score,
			car: $scope.newMatch.car
		});
		localStorage.setItem("matches", JSON.stringify($scope.matches));
		$location.path("/matches");
	};

	$scope.getMaxId = function(matchArray){
		if(matchArray != undefined && matchArray.length>0) {
			return Math.max.apply(Math,$scope.matches.map(function(matchArray){return matchArray.id;}));
		}
		else{
			return 0;
		}
	}

	$scope.matchDetails = function(matchId) {
		$location.path("/match/"+ matchId);
	};

    $scope.updateMatch = function(match) {
		match.updating=false;
		localStorage.setItem("matches", JSON.stringify($scope.matches));
	};
});


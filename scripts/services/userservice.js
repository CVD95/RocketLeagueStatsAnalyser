rlStatsAnalyserAppServices.service('UserService', function(){
    var user;
	var localusers = JSON.parse(localStorage.getItem("users"));
    if(localusers != undefined && localusers.length>0) {
		users = localusers;
	}
    this.getCurrentUser = function(){
        return user;
    };
    this.login = function(username, password) {
        var localusers = JSON.parse(localStorage.getItem("users"));
        if(localusers != undefined && localusers.length>0) {
            users = localusers;
        }
        console.log("login username: " + username + " password: "+password);
        users.forEach(function(item) {
            if(item.username === username && item.password === password) {
                localStorage.setItem("currentuser", JSON.stringify(item));
            }
        });
    };
    this.loggedIn= function(){
        return (user != undefined);
    }
});
rlStatsAnalyserAppServices.service('UserService', function(){
    var user;
	var users = [
        {id:1, username:"xzite", password:"xzite"},
        {id:2, username:"rimmen", password:"rimmen"}
    ];
	var localusers = JSON.parse(localStorage.getItem("users"));

    if(localusers != undefined && localusers.length>0) {
		users = localusers;
	}
    this.getCurrentUser = function(){
        return user;
    };
    this.login = function(username, password) {
        console.log("login username: " + username + " password: "+password);
        users.forEach(function(item) {
            if(item.username === username && item.password === password) {
                localStorage.setItem("currentuser", JSON.stringify(item));
            }
        });
    };
    this.loggedIn(){
        return 
    }
});
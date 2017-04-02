rlStatsAnalyserAppServices.service('UserService', function(){
    var user;
    if(user == undefined){
        user = JSON.parse(localStorage.getItem("currentuser"));
    }
    this.getCurrentUser = function(){
        return user;
    };
    this.login = function(username, password) {
        var users = JSON.parse(localStorage.getItem("users"));
        if(users != undefined && users.length>0) {
            users.forEach(function(item) {
                if(item.username === username && item.password === password) {
                    localStorage.setItem("currentuser", JSON.stringify(item));
                    user = item;
                }
            });
        }
    };
    this.loggedIn= function(){
        return (user != undefined && user.username.length > 0);
    }
    this.logout= function(){
        user = null;
    	localStorage.removeItem("currentuser");
    }
});
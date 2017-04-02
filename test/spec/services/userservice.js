describe('Service: user', function() {
    var service;
    var users = [{"username":"Xzite","password":"Xzite","rank":"Champion"},{"username":"c","password":"c","rank":"Challenger Elite"}];

    beforeEach(function() {
        module('rlStatsAnalyserApp');
        inject(function(_UserService_) {
            service = _UserService_;
        });
            localStorage.setItem("users", JSON.stringify(users));
    });

    afterEach(function() {
        localStorage.clear();
    });

    it('should login', function() {
        user2 = users[1];
        service.login(user2.username, user2.password);
        user = JSON.parse(localStorage.getItem("currentuser"));
        expect(user2.username).toBe(user.username);
        expect(user2.password).toBe(user.password);
        expect(user2.rank).toBe(user.rank);
    });

    it('should logout', function() {
        service.logout();
        user = JSON.parse(localStorage.getItem("currentuser"));
        expect(user).toBeNull();
    });

    it('should return the current user', function() {
        service.login(users[0].username, users[0].password);
        user = JSON.parse(localStorage.getItem("currentuser"));
        if(user!= null){
            expect(service.getCurrentUser().username).toBe(user.username);
            expect(service.getCurrentUser().password).toBe(user.password);
            expect(service.getCurrentUser().rank).toBe(user.rank);
        }
    });

    it('should return the loginstatus', function() {
        service.login(users[0].username, users[0].password);
        user = JSON.parse(localStorage.getItem("currentuser"));
        if(user!= undefined){
            expect(service.loggedIn()).toBe(true);
        }
        else{
            expect(service.loggedIn()).toBe(false);  
        }
    });
});
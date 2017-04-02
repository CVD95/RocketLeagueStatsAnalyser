  /*describe('E2E: matchcontroller', function(){
    var user;
    var currentUser;
	beforeEach(function() {
        browser.get('http://localhost:8080/');
        var users = browser.executeScript("return window.localStorage.getItem('users');");
        var user = users[0];
        browser.get('http://localhost:8080/#!/matches');
    });
    /*
    it('should display matches from user', function() {
        var matches = browser.executeScript("return window.localStorage.getItem('matches');");
        var userMatches;
        if(matches != undefined || matches.length > 0){
            matches.forEach(function(match) {
                if(match.playername === currentUser.name){
                    userMatches.add(match);
                }
            }, this);
            element.all(by.repeater('match in matches')).then(function(matches) {
                var titleElement = matches[0].element(by.className('title'));
                expect(titleElement.getText()).toEqual(userMatches[0].id);
            });
        }
    });
    it('should display the matchdetails', function() {
        element(by.tagName('tr')).click();
        expect(browser.getCurrentUrl()).toContain('http://localhost:8080/#!/match/');
    });
});
*/
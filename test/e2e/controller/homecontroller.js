describe('E2E: homecontroller', function(){
	beforeEach(function() {
        browser.get('http://localhost:8080/#!/home');
    });
    
    it('should display a proper h1 message', function() {
        expect(element(by.tagName('h1')).getText()).toBe("Home");
    });
});

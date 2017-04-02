describe('E2E: usercontroller', function(){
	beforeEach(function() {
        browser.get('http://localhost:8080/');
    });
    
    it('should register and redirect after register', function() {
        browser.get('http://localhost:8080/#!/register');
        var username = element(by.model('user.username'));
        var password = element(by.model('user.password'));
        username.sendKeys('testuser');
        password.sendKeys('testuser');
        expect(username.getAttribute('value')).toBe('testuser');
        var button = element(by.buttonText('Register'));
        button.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#!/login');
    });

    it('should login and redirect after logging in', function() {
        browser.get('http://localhost:8080/#!/login');
        var username = element(by.model('user.username'));
        var password = element(by.model('user.password'));
        username.sendKeys('testuser');
        password.sendKeys('testuser');        
        var button = element(by.buttonText('Login'));
        button.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#!/account');
    });

    //var test = function(firsturl, redirecturl){
    //    browser.get('http://localhost:8080/#!/login');
    //}

    /*it('should redirect to the rigth page', function() {
        var currentUser = browser.executeScript("return window.localStorage.getItem('currentuser');");
        console.log("user:" + currentUser.username);
        if(user != null){
            browser.get('http://localhost:8080/#!/login');
            expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#!/account');
        }
        else{
            browser.get('http://localhost:8080/#!/account');
            expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#!/login');
        }
    });

    it('should contain username', function() {
        browser.get('http://localhost:8080/#!/account');
        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toContain(user.username);
    });*/
});

    
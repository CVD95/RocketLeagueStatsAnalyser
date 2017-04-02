describe('E2E: usercontroller', function(){
    it('should register and redirect after register', function() {
        var user = 'testuser';
        browser.get('http://localhost:8080/#!/register');
        var username = element(by.model('user.username'));
        var password = element(by.model('user.password'));
        username.sendKeys(user);
        password.sendKeys(user);
        var button = element(by.buttonText('Register'));
        button.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#!/login');
    });

    it('should login and redirect after logging in', function() {
        var user = 'testuser';
        browser.get('http://localhost:8080/#!/login');
        var username = element(by.model('user.username'));
        var password = element(by.model('user.password'));
        username.sendKeys(user);
        password.sendKeys(user);        
        var button = element(by.buttonText('Login'));
        button.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#!/account');
    });

    it('should show the username in the title', function() {
        var user = 'testuser';
        browser.get('http://localhost:8080/#!/account');
        var h1 = element(by.tagName('h1'));
        var h1Text = h1.getText();
        expect(h1Text).toContain(user);
    });
});

    
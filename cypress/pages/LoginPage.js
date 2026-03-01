class LoginPage {
    get loginLink() {
        return cy.get('#login2');
    }

    get usernameInput() {
        return cy.get('#loginusername');
    }

    get passwordInput() {
        return cy.get('#loginpassword');
    }

    get loginButton() {
        return cy.get('button[onclick="logIn()"]');
    }

    get loggedInUserName() {
        return cy.get('#nameofuser');
    }

    clickLoginLink() {
        this.loginLink.should('be.visible').click();
    }

    fillUsername(username) {
        // Adding wait logic using visibility is usually sufficient
        this.usernameInput.should('be.visible').clear().type(username);
    }

    fillPassword(password) {
        this.passwordInput.should('be.visible').clear().type(password);
    }

    clickLoginButton() {
        this.loginButton.should('be.visible').click();
    }

    // Reusable login function
    login(username, password) {
        this.clickLoginLink();

        // Add a small wait for the modal to be fully visible and animatable
        cy.wait(10000);

        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton();

        // Wait for the login modal to disappear which indicates login is processing/done
        cy.get('#logInModal').should('not.be.visible');
    }

    verifyLoggedInUser(expectedUsername) {
        this.loggedInUserName
            .should('be.visible')
            .and('contain.text', `Welcome ${expectedUsername}`);
    }
}

export const loginPage = new LoginPage();

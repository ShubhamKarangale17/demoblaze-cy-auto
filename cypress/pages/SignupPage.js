class SignupPage {
    get signupLink() {
        return cy.get('#signin2');
    }

    get usernameInput() {
        return cy.get('#sign-username');
    }

    get passwordInput() {
        return cy.get('#sign-password');
    }

    get signupButton() {
        return cy.get('button[onclick="register()"]');
    }

    clickSignupLink() {
        this.signupLink.should('be.visible').click();
    }

    fillUsername(username) {
        this.usernameInput.should('be.visible').clear().type(username);
    }

    fillPassword(password) {
        this.passwordInput.should('be.visible').clear().type(password);
    }

    clickSignupButton() {
        this.signupButton.should('be.visible').click();
    }

    // Reusable function directly exposing POM actions
    register(username, password) {
        this.clickSignupLink();
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickSignupButton();
    }
}

export const signupPage = new SignupPage();

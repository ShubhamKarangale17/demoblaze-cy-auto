import { signupPage } from '../pages/SignupPage';

describe('Signup Module Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should successfully sign up a new user', () => {
        cy.fixture('users').then((users) => {
            // DemoBlaze does not allow registering the exact same user twice without throwing an error
            // Appending Date.now() ensures test runs successfully every time and avoids flakiness.
            const uniqueUsername = `${users.validUser.username}_${Date.now()}`;
            const password = users.validUser.password;

            // Handle expected alert window explicitly and validate its text message
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.equal('Sign up successful.');
            });

            // Execute Page Object action
            signupPage.register(uniqueUsername, password);
        });
    });
});

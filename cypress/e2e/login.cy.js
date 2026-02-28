import { loginPage } from '../pages/LoginPage';

describe('Login Module Tests', () => {
    beforeEach(() => {
        // Before each test, load the page
        cy.visit('/');
    });

    it('Should log in successfully with valid credentials', () => {
        // Import variables from the fixture file
        cy.fixture('users').then((users) => {
            const username = users.validUser.username;
            const password = users.validUser.password;

            // Trigger login steps from page object
            loginPage.login(username, password);

            // Validate successful logged in user by checking the top right greeting
            loginPage.verifyLoggedInUser(username);
        });
    });
});

## DemoBlaze Cypress Automation Framework

This is a clean, simple, and professional UI automation framework for testing [DemoBlaze](https://www.demoblaze.com) using **Cypress** and the **Page Object Model (POM)** design Pattern. 

It is designed to be beginner-friendly while still adhering to industry best practices.

## 🏗️ Project Structure

```text
demo_blaze_cy/
│
├── cypress/
│   ├── e2e/                     # Test Specifications
│   │   ├── login.cy.js          # Tests for the Login flow
│   │   └── signup.cy.js         # Tests for the Signup flow
│   │
│   ├── pages/                   # Page Object Model (POM) Classes
│   │   ├── LoginPage.js         # Elements & actions for Login 
│   │   └── SignupPage.js        # Elements & actions for Signup
│   │
│   ├── fixtures/                # Test Data
│   │   └── users.json           # JSON holding reusable credentials
│   │
│   └── support/
│       └── commands.js          # Custom Cypress commands (ready for expansion)
│
├── cypress.config.js            # Main Cypress configuration (Base URL, Timeouts)
└── package.json                 # Project dependencies & npm scripts
```

## 🚀 Key Features

*   **Page Object Model (POM)**: Selectors and page-specific logic are encapsulated inside `.js` class files inside the `cypress/pages` directory. Test scripts strictly focus on the business logic instead of interacting with complex CSS selectors.
*   **No Hardcoded `cy.wait()`**: All waits and assertions are dynamic (e.g., using `cy.get().should('be.visible')`). 
*   **Dynamic Data Automation**: Solves the "User already exists" bug in DemoBlaze's signup by dynamically appending a `Date.now()` timestamp to the username during specific tests.
*   **Isolated Environments**: Every `it` block inside `describe` successfully starts with a clean slate `cy.visit('/')`.
*   **Centralized Configuration**: `cypress.config.js` sets default variables like test timeouts (`defaultCommandTimeout: 10000`) and the default domain (`baseUrl: "https://www.demoblaze.com"`).

## 💻 Prerequisites

Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (which includes npm)
*   VS Code (or any preferred IDE)

## 🛠️ Installation & Setup

1.  **Clone or Open the project directory** 
    Open your terminal and navigate to this folder:
    ```bash
    cd demo_blaze_cy
    ```

2.  **Install dependencies**
    This installs Cypress based on the given `package.json`.
    ```bash
    npm install
    ```

## ▶️ Running Tests

### 1. Interactive Mode (Headed UI)
This is best when you are writing or debugging automation. It opens the interactive Cypress Test Runner.

```bash
npm run cypress:open
```
*   Select **E2E Testing**.
*   Choose your preferred browser (Chrome, Edge, etc.).
*   Click on specific test files (`signup.cy.js` or `login.cy.js`) to see them run in real-time.

### 2. CI/CD Mode (Headless / Terminal)
This executes the test suite silently in the background and provides an output log straight into your terminal. Ideal for Jenkins, GitHub Actions, or quick regression checks.

```bash
npm run cypress:run
```

## 📋 Note on Known Issues with DemoBlaze

The login function on the DemoBlaze web app is notoriously slow and has irregular implicit waiting conditions for the UI components to correctly bind session cookies. The `LoginPage.js` accommodates this by:
* Attempting short animation waits (`cy.wait(500)`) specifically targeting Modal fade-in delays.
* Listening for UI elements disappearing `cy.get('#logInModal').should('not.be.visible')` after submission, ensuring operations correctly flow asynchronously before performing assertions. 

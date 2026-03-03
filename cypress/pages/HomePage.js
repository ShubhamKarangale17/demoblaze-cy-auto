class HomePage {
    clickProduct(productName) {
        cy.contains(productName).should('be.visible').click();
    }
}

export default new HomePage();

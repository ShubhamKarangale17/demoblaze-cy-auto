class ProductPage {
    addToCart() {
        cy.contains('Add to cart').should('be.visible').click();
    }

    handleAlertAndVerifyText(expectedText) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains(expectedText);
        });
    }

    navigateToCart() {
        cy.get('#cartur').should('be.visible').click();
    }
}

export default new ProductPage();

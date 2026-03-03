class CartPage {
    validateProductInCart(productName) {
        cy.get('.success').contains(productName).should('be.visible');
    }

    validateProductPrice(productName, expectedPrice) {
        cy.contains('.success td', productName)
            .parent()
            .find('td')
            .eq(2)
            .should('contain', expectedPrice);
    }

    validateTotalPrice(expectedPrice) {
        cy.get('#totalp').should('be.visible').and('have.text', expectedPrice);
    }
}

export default new CartPage();

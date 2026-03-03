import homePage from '../pages/HomePage';
import productPage from '../pages/ProductPage';
import cartPage from '../pages/CartPage';

describe('Add to Cart Automation Suite', () => {
    let productData;

    beforeEach(() => {
        cy.fixture('products').then((data) => {
            productData = data;
        });
        cy.visit('/');
    });

    it('should add a product to the cart and validate its presence and price', () => {
        // Step 1: Click product from homepage
        homePage.clickProduct(productData.productName);

        // Step 2 & 3: Click Add to cart and handle alert
        productPage.handleAlertAndVerifyText('Product added');
        productPage.addToCart();

        // Step 4: Navigate to Cart page
        productPage.navigateToCart();

        // Step 5: Validate product is present in cart and prices are correct
        cartPage.validateProductInCart(productData.productName);
        cartPage.validateProductPrice(productData.productName, productData.price);
        cartPage.validateTotalPrice(productData.price);
    });
});

/// <reference types="cypress"/>

describe('working with inputs', () => {
    it('visit url', () => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('try login', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')

        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()

        cy.get('.app_logo').should('have.text', 'Swag Labs')
    });

    it('add to cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('exist')
    });

    it('checkout', () => {
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_item').should('exist')
        cy.get('#checkout').click()
    });

    it('autofill detail checkout', () => {
        cy.get('#first-name').clear()
        cy.get('#first-name').type('wisnu')

        cy.get('#last-name').clear()
        cy.get('#last-name').type('d putra') 

        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('123')

        cy.get('#continue').click()

        cy.get('.error-message-container').should('not.exist')
        
    });

    it('overview', () => {
        cy.get('.cart_item').should('exist')
        cy.get('#finish').click()
        cy.get('h2').should('have.text', 'Thank you for your order!')
    });
});
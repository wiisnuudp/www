/// <reference types="cypress"/>

describe('clicking button', () => {
    it('should load correct url', () => {
        cy.visit('https://books.toscrape.com/index.html')
        cy.url().should('include', 'index.html')
    });

    it('should clicking', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    });
});

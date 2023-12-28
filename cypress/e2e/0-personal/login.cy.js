/// <reference types="cypress"/>

describe('working with inputs', () => {
    it('visit url', () => {
        cy.visit('http://zero.webappsecurity.com')
    });
    it('click button sign in', () => {
        cy.get('#signin_button').click()
        cy.url().should('include', 'login.html')
    });

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });

    it('checkbox', () => {
        cy.get('#user_remember_me').check()
    });

    it('try login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password )

            cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
        })
    });
});

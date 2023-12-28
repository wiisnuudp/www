// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('pay', (ddpayee, ddaccount, amount, date, desc, btnPay) => {


        // select payee
        cy.get(ddpayee).select(2).should('have.value', 'apple')
        //select account
        cy.get(ddaccount).select(2).should('contain.text', 'Savings')
        // fill amount
        cy.get(amount).type('20')
        // date
        cy.get(date).click()
        // cy.contains('.ui-datepicker-month').type('December')
        // cy.contains('.ui-datepicker-year').type('2022')
        cy.contains("[data-handler='selectDay'] a", "24").click()
        // description
        cy.get(desc).type('testing custom command')
        // pay
        cy.get(btnPay).click()
            
})
/// <reference types="cypress"/>

describe('working with inputs', () => {

    it('visit url login', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('click button sign in', () => {
        cy.get('#signin_button').click()
        cy.url().should('include', 'login.html')
    });

    it('try login', () => {
        
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password )

            cy.get('.board-header').should('contain.text','Cash Accounts')
        })

        
        cy.get('#pay_bills_tab').click()

    });

    
    it('detail payees', () => {

        const ddpayee = '#sp_payee'
        const ddaccount = '#sp_account'
        const amount = '#sp_amount'
        const date = '#sp_date'
        const desc = '#sp_description'
        const btnPay = '#pay_saved_payees'

        cy.pay(ddpayee, ddaccount, amount, date, desc, btnPay)

        // assertion
        cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
    });
});

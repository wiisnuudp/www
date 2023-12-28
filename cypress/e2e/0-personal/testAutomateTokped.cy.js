/// <reference types="cypress"/>

describe('automate tokped', () => {
    it.only('visit website', () => {
        cy.visit('https://www.tokopedia.com/'
        , {
            headers: {
              "Accept-Encoding": "gzip, deflate"
            }
        }
        )
    });

    it.only('try search', () => {
        const searchbtn = '[data-unify="Search"]'
        const celanaPanjang = '[data-testid="initialStateDropdown"]'
        const searchInfo = '.css-x8pgyn'
        const searchResult = '.css-k1aaub'


        cy.get(searchbtn).type('celana')
        .then($element => {
            if ($element.length > 0) {
                cy.get(celanaPanjang).contains('celana panjang pria').click()

                // Assertion
                cy.get(searchResult).should('exist')
                cy.get(searchInfo).contains('celana panjang pria')

            }
        })
    });

    it.only('click barang random', () => {
        
        const listProduk = '.css-llwpbs'

        cy.get(listProduk).should('have.length.greaterThan', 0).its('length')
        .then(function (n)
        {
            return Cypress._.random(0, n - 1);
        })
        .then(function (randomIndex){
            cy.get(listProduk).eq(randomIndex).click()
        })
    });
    it.only('beli barang', () => {

        const popupFS = '..e1nc1fa20'

        // Assertion
        cy.get('#qty-editor-atc').should('have.length.greaterThan', 0)

        cy.get('[data-testid="pdpBtnNormalSecondary"]').contains('Beli Langsung').click()

        // Assertion
        cy.get('.e1qvo2ff8').contains('Beli Langsung')
        cy.get('.sidebar-top-hedge').should('exist')

        // cy.get(popupFS).then($el => {
        //     if ('.e1nc1fa21' == true) {
        //         cy.get('.css-1hn6epg').contains('Tutup tampilan modal').click()
        //     }
        // })
    });
    // it.only('login', () => {
    //     cy.get('[data-testid="social-login-button"]').click()
    //     cy.get('#googleLogin61581').contains('[data-testid="google-login"]').click()
    // });
});

/// <reference types ="cypress"/>

describe('handle Iframe', () => {

    it('CLick on the search button inside the Iframe', () => {

        cy.visit('https://www.zkoss.org/zkdemo/composite/iframe')
       cy.xpath("//a[@title='ZK Official Website']").should('be.visible')
    })
})
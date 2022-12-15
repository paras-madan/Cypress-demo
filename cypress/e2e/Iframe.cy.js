/// <reference types ="cypress"/>

describe('handle Iframe', () => {

    it('CLick on the search button inside the Iframe', () => {

        cy.visit('https://www.zkoss.org/zkdemo/composite/iframe')
        cy.get('.z-iframe').then(function($ele){
            var iframe= $ele.contents().find('#search-box')
            cy.wrap(iframe).click()
        })
    })
})
/// <reference types ="cypress"/>

describe('only for tetsing', () => {

    beforeEach(() => {

        cy.visit('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
    })


    it('verify the title Smoke ', { tags: 'Smoke' }, () => {
        cy.title().should('eq', 'Selenium Practise: Bootstrap Dropdown Example for Selenium')

    })
    it('click on the dropdown button', { tags: ['Smoke, Sanity'] }, () => {
        cy.get('#menu1').click()
    })
    it('Smoke', {tags: 'Regression'},() => {
        cy.contains('Mukesh Otwani').should('be.visible')

    })

})




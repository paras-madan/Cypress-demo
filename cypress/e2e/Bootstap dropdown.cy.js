/// <reference types ="cypress"/>

describe('Bootstrap drop down', () => {


    it('click drop down and print all the drop down value', () => {

        // cy.visit('https://getbootstrap.com/docs/4.0/components/dropdowns/')
        cy.visit('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
        cy.get('#menu1').click()
        cy.get('a[role="menuitem"]').each(function ($ele, index, list) {

            cy.log($ele.text())

            if ($ele.text() === 'JavaScript') {
                cy.wrap($ele).click().wait(3000)


            }
            else {
                cy.log('Java Script not found', $ele.text())
            }


        })

    })

})

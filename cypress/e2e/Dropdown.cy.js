///<reference types="Cypress" />

describe('Handle dropdowns', ()=>{

    it.skip('dropdown with select', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country[name="CASECF7"]').select('Italy').should('have.value', 'Italy')
    });

    it.skip('dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        //tem que clicar nesse elemento primeiro
        cy.get('#select2-billing_country-container').click()
        cy.get('input.select2-search__field').type('Brazil').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Brazil')
    });

    it.skip('Auto suggest dropdown', ()=>{
        cy.visit('https://wikipedia.org')
        //tem que clicar nesse elemento primeiro
        cy.get('#searchInput').type('Brazil')
        cy.get('.suggestion-title').contains('Brazil').click()
    });

    it('Dynamic dropdown', ()=>{
        cy.visit('https://google.com')
        //tem que clicar nesse elemento primeiro
        cy.get('.gLFyf[name="q"]').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if ($el.text()=='cypress automation tutorial') 
            {
                cy.wrap($el).click()
            }
        })

        cy.get('.gLFyf[name="q"]').should('have.value', 'cypress automation tutorial')
    });

})
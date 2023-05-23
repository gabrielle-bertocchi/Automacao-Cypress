
describe('Check Button', () => {

it('Checking Radio Buttons', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')

    //visibility of radio buttons
    cy.get('.form-check-input#female').should('be.visible')
    cy.get('.form-check-input#male').should('be.visible')

    //selecting radio button
    cy.get('.form-check-input#female').check().should('be.checked')
    cy.get('.form-check-input#male').should('not.be.checked')

    cy.get('.form-check-input#male').check().should('be.checked')
    cy.get('.form-check-input#female').should('not.be.checked')

  })
  it('Checking check boxes', () => {
    
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')

    //Visibility of the element
    cy.get('input#monday').should('be.visible')

    //Selecting single check box - monday
    cy.get('input#monday').check().should('be.checked')

    //unselecting checkbox
    cy.get('input#monday').uncheck().should('not.be.checked')
      
    });

    it('Selecionar todos os elementos', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
    });
    it('Selecionar primeiro ou ultimo', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

    });
})


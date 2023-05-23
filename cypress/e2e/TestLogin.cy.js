///<reference types="Cypress" />

describe('Teste Funcional', () => {
  it('Verificar Titulo', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com')

    cy.title().should('eq', 'OrangeHRM')

    cy.get('.oxd-input[name="username"]').should('have.value', '')
    
  })

})
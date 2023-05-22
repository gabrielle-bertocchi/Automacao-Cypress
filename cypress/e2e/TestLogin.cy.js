describe('Teste Funcional', () => {
  it('Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    cy.title().should('eq', 'OrangeHRM')
  })
})
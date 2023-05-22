describe('Teste Funcional', () => {
  it('Verificar Titulo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')

    cy.title().should('eq', 'OrangeHRM')
    
  })
})
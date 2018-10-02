describe('Visiting the landing page', function() {
  it('Shows the login button', function() {
    cy.visit('/')
    cy.contains('log in with egghead').should('be.visible')
  })
})

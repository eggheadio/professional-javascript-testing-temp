describe('Visiting the landing page', function() {
  it('Loads the page', function() {
    cy.visit('/')

    cy.get('h1').should('contain', 'Professional JavaScript Testing')
  })
})

describe('Blog App', () => {
  cy.request('POST', 'http://localhost:3000/api/testing/rest')
  cy.visit('http://localhost:5173')

  it('Should Login successfully', () => {
    cy.visit('http://localhost:5173')
    cy.get('input:first').type('Frodo')
    cy.get('input:last').type('Frodo')
    cy.get('button:first').click()
  })
})

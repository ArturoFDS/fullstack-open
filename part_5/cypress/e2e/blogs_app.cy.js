describe('Blog App', () => {
  beforeEach(() => {
    cy.request('GET', 'http://localhost:3000/api/testing/reset')
    cy.visit('http://localhost:5173')
    cy.visit('http://localhost:5173')
    cy.get('input:first').type('Frodo')
    cy.get('input:last').type('Frodo')
    cy.get('button:first').click()
    cy.get('button').click()
  })
  it('Should create a new blog', () => {
    cy.get('#create-new-blog').click()
    cy.get('#title').type('Blog of duty')
    cy.get('#url').type('www.example.com')
    cy.get('#likes').type(10)
    cy.get('#create-blog').click()
  })
})

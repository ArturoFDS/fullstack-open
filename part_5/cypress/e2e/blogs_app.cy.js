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

  it('Should give a like to a specific blog', () => {
    cy.get('#show-details').click()
    cy.get('#give-like').click()
  })

  it('Should delete a specific blog', () => {
    cy.get('#show-details').click()
    cy.get('#delete-blog').click()
  })

  it('Should prove the blogs are ordered according to the likes, being the most liked at first place and the less likes at last', () => {
    cy.get('#blogs-container').find('section').eq(0).should('contain', 'Blog of duty')
    cy.get('#blogs-container').find('section').eq(7).should('contain', 'Capitan America was right in Civil War')
  })
})

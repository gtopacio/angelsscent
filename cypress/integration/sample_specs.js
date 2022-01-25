describe('My First Test', () => {
    it('visits angels scent home page', () => {
      cy.visit('https://angelsscent-dev.firebaseapp.com/')

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').click() 

      cy.get('.account-header').should('have.text', '\n         Products   \n    ')
      cy.get('#accountDropdown').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
    })
  })
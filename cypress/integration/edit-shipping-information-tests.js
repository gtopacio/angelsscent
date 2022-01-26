describe('Edit Shipping Information Suits', () => {
    it('test for valid change of province', () => {
      cy.visit('https://angelsscent-dev.firebaseapp.com/')

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\n         Products   \n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#email').type('dummy1@gmail.com', { delay: 5})
      cy.get('#password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\n         Products   \n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'dummy1')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Rizal')

      // edit shipping information
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(5) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#province').clear().type('Cebu', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // check if change is reflected, verify if province = Cebu ** important to reload page here**
      cy.wait(2000)
      cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Cebu')

      // return to old shipping information
      // edit shipping information
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(5) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#province').clear().type('Rizal', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test for discard changes/changes not saved', () => {
        cy.visit('https://angelsscent-dev.firebaseapp.com/')
  
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
        // enter home
        cy.get('.account-header').should('have.text', '\n         Products   \n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(1000)
        cy.get('#email').type('dummy1@gmail.com', { delay: 5})
        cy.get('#password').type('dumdumz', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(2000)
  
        // login successful for dummy1 --> check account info
        cy.get('.account-header').should('have.text', '\n         Products   \n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
        cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'dummy1')
        cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Rizal')
  
        // edit shipping information
        cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(5) > .shadow').trigger('mouseover').click()
        cy.wait(1000)
        cy.get('#province').clear().type('Cebu', { delay: 5})
        cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
        // check if change is reflected, verify if province = Cebu ** important to reload page here**
        cy.wait(2000)
        cy.reload()
        cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Rizal')
  
        // log out
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
      })

      it('test for saving blank information', () => {
        cy.visit('https://angelsscent-dev.firebaseapp.com/')
  
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
        // enter home
        cy.get('.account-header').should('have.text', '\n         Products   \n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(1000)
        cy.get('#email').type('dummy1@gmail.com', { delay: 5})
        cy.get('#password').type('dumdumz', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(2000)
  
        // login successful for dummy1 --> check account info
        cy.get('.account-header').should('have.text', '\n         Products   \n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
        cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'dummy1')
        cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Rizal')
  
        // edit shipping information
        cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(5) > .shadow').trigger('mouseover').click()
        cy.get('#province').clear()
        cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
        cy.get('#province').should('have.text', '')
        cy.get('#province').type('Rizal', { delay: 5})
        cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

        // check if change is reflected, verify if province = Cebu ** important to reload page here**
        cy.wait(2000)
        cy.reload()
        cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Rizal')
  
        // log out
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
      })

  })
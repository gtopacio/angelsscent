describe('Sign-Up Test Suite', () => {
    // it('test case 1 -> able to signed up, logged in, and log out', () => {
    //   cy.visit(Cypress.env('test_host_url'))
    
    //   // check if it landed on the landing page and go to the products page
    //   cy.contains('SHOP NOW')
    //   cy.contains('SHOP NOW').trigger('mouseover').click()

    //   // find the sign up button
    //   cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
    //   cy.get('#accountDropdown').trigger('mouseover').click()
    //   cy.get(':nth-child(2) > .dropdown-item').click()
    //   cy.wait(1000)
      
    //   // fill up sign up form and register
    //   cy.get('#signup-firstname').type('1234568910', { delay: 5})
    //   cy.get('#signup-lastname').type('1234568910', { delay: 5})
    //   cy.get('#signup-contactNo').type('9123456789', { delay: 5})
    //   cy.get('#signup-email').type('123468910@gmail.com', { delay: 5})
    //   cy.get('#signup-password').type('1234567', { delay: 5})
    //   cy.get('#signup-street').type('1234567', { delay: 5})
    //   cy.get('#signup-city').type('1234567', { delay: 5})
    //   cy.get('#signup-province').type('1234567', { delay: 5})
    //   cy.get('#signup-region').select('NCR')
    //   cy.get('#signup-zipcode').type('123456', { delay: 5})
    //   cy.get('#submit-signup').click()

    //   // assert if logged in and then log out for the session
    //   cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
    //   cy.get('#accountDropdown').trigger('mouseover').click()
    //   cy.get(':nth-child(1) > .dropdown-item').should('have.text', 'View Account Info')
    //   cy.get(':nth-child(4) > .dropdown-item').click()
    //   cy.wait(1000)

    //   // checks if it logged out completely
    //   cy.get('#accountDropdown').trigger('mouseover').click()
    //   cy.get(':nth-child(1) > .dropdown-item').should('have.text', 'Log In')
    // })
    

    it('test case 2 -> able to log in and log out', () => {
      cy.visit(Cypress.env('test_host_url'))

      // check if it landed on the landing page and go to the products page
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
      
      // find the log in button
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)

      // enter home
      cy.get('#login-email').type('dummy1@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // log out for the session
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').click()
      cy.wait(1000)

      // checks if it logged out completely
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').should('have.text', 'Log In')
    })

    it('test case 4 -> Sign Up failed due to invalid email (duplciate email)', () => {
      cy.visit(Cypress.env('test_host_url'))
    
      // check if it landed on the landing page and go to the products page
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()

      // find the sign up button
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(2) > .dropdown-item').click()
      cy.wait(1000)
      
      // fill up sign up form and register
      cy.get('#signup-firstname').type('1234568910', { delay: 5})
      cy.get('#signup-lastname').type('1234568910', { delay: 5})
      cy.get('#signup-contactNo').type('9123456789', { delay: 5})
      cy.get('#signup-email').type('1234689@gmail.com', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored dut to invalid email
      cy.get('#invalid-email').should('have.text', 'Email is invalid.')
 
    })

    it('test case 3 -> Sign Up failed due to invalid email (no email included)', () => {
      cy.visit(Cypress.env('test_host_url'))
    
      // check if it landed on the landing page and go to the products page
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()

      // find the sign up button
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(2) > .dropdown-item').click()
      cy.wait(1000)
      
      // fill up sign up form and register
      cy.get('#signup-firstname').type('1234568910', { delay: 5})
      cy.get('#signup-lastname').type('1234568910', { delay: 5})
      cy.get('#signup-contactNo').type('9123456789', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored dut to invalid email
      cy.get('#invalid-email').should('have.text', 'Email is invalid.')
 
    })

})
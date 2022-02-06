describe('Sign-Up Test Suite', () => {

      // it('For Sign Out Purposes', () => {
    
      //  cy.visit(Cypress.env('test_host_url'))
      //  cy.contains('SHOP NOW')
      //  cy.contains('SHOP NOW').trigger('mouseover').click()
      
      //  cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      //  cy.get('#accountDropdown').trigger('mouseover').click()
      //  cy.get(':nth-child(4) > .dropdown-item').click()
      //  cy.wait(1000)
      // })

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
      cy.wait(5000)

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

    it('test case 3 -> Sign Up failed due to invalid email (duplciate email)', () => {
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

      // assert if it errored due to invalid email
      cy.get('#signup-err-msg').should('have.text', 'User already exists')
 
    })

    it('test case 4 -> Sign Up failed due to invalid email (no email included)', () => {
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

      // assert if it errored due to blank email
      cy.get('#invalid-email').should('have.text', 'Email is invalid.')
 
    })

    it('test case 5 -> Sign Up failed due to invalid password (less than 6 character password)', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-password').type('123', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored due to invalid password
      cy.get('#password-error').should('have.text', 'Password must be at least 6 characters.')
 
    })

    it('test case 6 -> Sign Up failed due to invalid password (no password)', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored due to blank password
      cy.get('#password-error').should('have.text', 'Password must be at least 6 characters.')
 
    })

    it('test case 7 -> Sign Up failed due to blank street address', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored due to blank street address
      cy.get('#street-error').should('have.text', 'Please fill out this field.')
 
    })

    it('test case 8 -> Sign Up failed due to blank city', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored due to blank city
      cy.get('#city-error').should('have.text', 'Please fill out this field.')
 
    })

    it('test case 9 -> Sign Up failed due to blank province', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored due to blank province
      cy.get('#province-error').should('have.text', 'Please fill out this field.')
 
    })

    it('test case 10 -> Sign Up failed due to blank region', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-zipcode').type('123456', { delay: 5})
      cy.get('#submit-signup').click()

      // assert if it errored due to blank region
      cy.get('#region-error').should('have.text', 'Please fill out this field.')
 
    })

    it('test case 11 -> Sign Up failed due to blank zipcode', () => {
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
      cy.get('#signup-email').type('12346899999@gmail.com', { delay: 5})
      cy.get('#signup-password').type('1234567', { delay: 5})
      cy.get('#signup-street').type('1234567', { delay: 5})
      cy.get('#signup-city').type('1234567', { delay: 5})
      cy.get('#signup-province').type('1234567', { delay: 5})
      cy.get('#signup-region').select('NCR')
      cy.get('#submit-signup').click()

      // assert if it errored due to blank zipcode
      cy.get('#zipcode-error').should('have.text', 'Please fill out this field.')
 
    })



})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Edit Shipping Information Suits', () => {

    it('test case 1 -> Edit street address and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Malacañan Palace, JP, Kalayaan Hall')

      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#streetAdd').clear().type('San Andres Street, Solnopan', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // check if change is reflected, verify if province = Cebu ** important to reload page here**
      //cy.wait(2000)
      //cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'San Andres Street, Solnopan')
      cy.reload()
      cy.wait(2000)

      // return to old shipping information
      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#streetAdd').clear().type('Malacañan Palace, JP, Kalayaan Hall', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 2 -> Edit city and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(2) > .section-body').should('have.text', 'Metro Manila')

      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#city').clear().type('Caramoan', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // check if change is reflected, verify if province = Cebu ** important to reload page here**
      //cy.wait(2000)
      // cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(2) > .section-body').should('have.text', 'Caramoan')
      cy.reload()
      cy.wait(2000)

      // return to old shipping information
      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#city').clear().type('Metro Manila', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 3 -> Edit province and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Manila')

      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#province').clear().type('Camarines Sur', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // check if change is reflected, verify if province = Cebu ** important to reload page here**
      //cy.wait(2000)
      // cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Camarines Sur')
      cy.reload()
      cy.wait(2000)

      // return to old shipping information
      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#province').clear().type('Manila', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 4 -> Edit region and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(4) > .section-body').should('have.text', 'NCR')

      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(2000)
      cy.get(':nth-child(4) > .form-control').select('N. LUZON')
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // check if change is reflected, verify if province = Cebu ** important to reload page here**
      // cy.wait(2000)
      // cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(4) > .section-body').should('have.text', 'N. LUZON')
      cy.wait(2000)
      cy.reload()
      

      // return to old shipping information
      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(2500)
      cy.get(':nth-child(4) > .form-control').select('NCR')
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 5 -> Edit zipcode and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(5) > .section-body').should('have.text', '1440')

      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('#zipcode').clear().type('4429', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // check if change is reflected, verify if province = Cebu ** important to reload page here**
      // cy.wait(2000)
      // cy.reload()
      cy.get(':nth-child(5) > .section-body').should('have.text', '4429')
      cy.wait(2000)
      cy.reload()
      

      // return to old shipping information
      // edit shipping information
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(2500)
      cy.get('#zipcode').clear().type('1440', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 6 -> Edit street address and discard changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Malacañan Palace, JP, Kalayaan Hall')
  
      // edit shipping information but discard changes
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#streetAdd').clear().type('San Andres Street, Solnopan', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
      // check if information remains the same
      //cy.wait(2000)
      //cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Malacañan Palace, JP, Kalayaan Hall')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 7 -> Edit city and discard changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(2) > .section-body').should('have.text', 'Metro Manila')
  
      // edit shipping information but discard changes
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#city').clear().type('Caramoan', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
      // check if information remains the same
      //cy.wait(2000)
      //cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(2) > .section-body').should('have.text', 'Metro Manila')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 8 -> Edit province and discard changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Manila')
  
      // edit shipping information but discard changes
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#province').clear().type('Camarines Sur', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
      // check if information remains the same
      //cy.wait(2000)
      //cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Manila')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 9 -> Edit region and discard changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(4) > .section-body').should('have.text', 'NCR')
  
      // edit shipping information but discard changes
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get(':nth-child(4) > .form-control').select('N. LUZON')
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
      // check if information remains the same
      //cy.wait(2000)
      //cy.reload()
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(4) > .section-body').should('have.text', 'NCR')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 10 -> Edit zipcode and discard changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(5) > .section-body').should('have.text', '1440')
  
      // edit shipping information but discard changes
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#zipcode').clear().type('4429', { delay: 5})
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
  
      // check if information remains the same
      //cy.wait(2000)
      //cy.reload()
      cy.get(':nth-child(5) > .section-body').should('have.text', '1440')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 11 -> Edit blank street address and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Malacañan Palace, JP, Kalayaan Hall')
  
      // edit shipping information and validation message should appear, discard after
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#streetAdd').clear()
      cy.get('#streetAdd').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
      cy.wait(1000)
      
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Malacañan Palace, JP, Kalayaan Hall')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 12 -> Edit blank city and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(2) > .section-body').should('have.text', 'Metro Manila')
  
      // edit shipping information and validation message should appear, discard after
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#city').clear()
      cy.get('#city').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
      cy.wait(1000)
      
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(2) > .section-body').should('have.text', 'Metro Manila')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 13 -> Edit blank province and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Manila')
  
      // edit shipping information and validation message should appear, discard after
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#province').clear()
      cy.get('#province').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
      cy.wait(1000)
      
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Manila')
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  
    it('test case 14 -> Edit blank zipcode  and save changes', () => {
      cy.visit(Cypress.env('test_host_url'))
  
      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()
  
  
      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('1dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)
  
      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Ayato')
      cy.get(':nth-child(5) > .section-body').should('have.text', '1440')
  
      // edit shipping information and validation message should appear, discard after
      cy.get(':nth-child(6) > .shadow').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('#zipcode').clear()
      cy.get('#zipcode').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(1) > .btn').trigger('mouseover').click()
      cy.get('#editShipping > .modal-dialog > .modal-content > .modal-body > form > .container-fluid.my-4 > .row > :nth-child(2) > .btn').trigger('mouseover').click()
      cy.wait(1000)
      
      cy.get(':nth-child(5) > .section-body').should('have.text', '1440')
  
  
      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  

  })
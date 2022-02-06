describe('Product Inventory Suite', () => {

    it('For Sign Out Purposes', () => {
    
        cy.visit(Cypress.env('test_host_url'))
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
       
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)
       })

    it('test case 1 -> Successfully Deleted a Product', () => {
            cy.visit(Cypress.env('test_host_url'))
      
            // check if it landed on the landing page and go to the products page
            cy.contains('SHOP NOW')
            cy.contains('SHOP NOW').trigger('mouseover').click()
            
            // find the log in button
            cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
            cy.get('#accountDropdown').trigger('mouseover').click()
            cy.wait(1000)
            cy.get(':nth-child(1) > .dropdown-item').click()
            cy.wait(6000)
      
            // enter home
            cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
            cy.get('#login-password').type('admin123', { delay: 5})
            cy.get('form > .mt-4 > .row > .btn').click()
            cy.wait(8000)
    
            cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
            cy.wait(6000)
    
            cy.get('[data-bs-target="#removeProductrbl4gZkqU62vIGGSCsLw"]').click()
            cy.wait(10000)

            cy.get('#removeProductrbl4gZkqU62vIGGSCsLw > .modal-dialog > .modal-content > .modal-body > .container-fluid > .popup-container > .d-flex > .row > :nth-child(1) > .btn').click()
            cy.wait(6000)

            cy.contains('Adelaide').should('not.exist')

            cy.get('#dashboardDropDown').trigger('mouseover').click()
            cy.get(':nth-child(3) > .dropdown-item').click()
            cy.wait(1000)
    
    
    })

    it('test case 2 -> Successfully Edit a Product Name', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(6) > .col-sm-9 > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(6) > .col-sm-9 > .form-control').type('Alexander')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get(':nth-child(1) > :nth-child(1) > ins').should('have.text', 'Alexander')

        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 3 -> Successfully Edit a Product Description', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(7) > .col-sm-9 > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(7) > .col-sm-9 > .form-control').type('Polo Sport Inspired')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get(':nth-child(1) > .text-truncate').should('have.text','Polo Sport Inspired')

        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 4 -> Successfully Edit a Product Shipping Length', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(10) > :nth-child(1) > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(10) > :nth-child(1) > .form-control').type('5')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', '5')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 5 -> Successfully Edit a Product Shipping Width', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(10) > :nth-child(2) > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(10) > :nth-child(2) > .form-control').type('5')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(5)').should('have.text', '5')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 6 -> Successfully Edit a Product Shipping Height', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(11) > :nth-child(1) > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(11) > :nth-child(1) > .form-control').type('15')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(6)').should('have.text', '15')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 7 -> Successfully Edit a Product Shipping Weight', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(11) > :nth-child(2) > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(11) > :nth-child(2) > .form-control').type('100')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(7)').should('have.text', '100ML')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 8 -> Successfully Edit a Product Listing Price', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(14) > :nth-child(1) > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(14) > :nth-child(1) > .form-control').type('500')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(8)').should('have.text', '₱500.00')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 9 -> Successfully Edit a Product Listing Quantity', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(14) > :nth-child(2) > .form-control').clear()
        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > :nth-child(14) > :nth-child(2) > .form-control').type('50')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(9)').should('have.text', '50')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 9 -> Successfully Edit a Product Listing Status to Hidden', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#displayoptionQnJnTFXXHnDf4OiCwBXD').select('HIDDEN')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(10)').should('have.text', 'hidden')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 10 -> Successfully Edit a Product Listing Status to Listed', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#displayoptionQnJnTFXXHnDf4OiCwBXD').select('LISTED')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(10)').should('have.text', 'listed')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 11 -> Successfully Edit a Product Listing Tag to Women', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#tagoptionQnJnTFXXHnDf4OiCwBXD').select('WOMEN')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(11)').should('have.text', 'women')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })

    it('test case 12 -> Successfully Edit a Product Listing Tag to Men', () => {
        cy.visit(Cypress.env('test_host_url'))
  
        // check if it landed on the landing page and go to the products page
        cy.contains('SHOP NOW')
        cy.contains('SHOP NOW').trigger('mouseover').click()
        
        // find the log in button
        cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.wait(6000)
  
        // enter home
        cy.get('#login-email').type('admin2@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(8000)

        cy.get('[href="/dashboard/productinventory"] > .nav-link').click()
        cy.wait(6000)

        cy.get('[data-bs-target="#edit-modalQnJnTFXXHnDf4OiCwBXD"]').click()
        cy.wait(6000)

        cy.get('#tagoptionQnJnTFXXHnDf4OiCwBXD').select('MEN')
        cy.wait(3000)

        cy.get('#edit-modalQnJnTFXXHnDf4OiCwBXD > .modal-dialog > .modal-content > form > .container-fluid > .pt-5 > #submit-button').click()
        cy.wait(6000)

        cy.get('tbody > :nth-child(1) > :nth-child(11)').should('have.text', 'men')


        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)

    })
    
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
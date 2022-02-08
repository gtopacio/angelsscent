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

    it('test case 1 -> Successfully Added a Product', () => {
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
        cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(2000)

        cy.get('[href="/dashboard/addproduct"] > .nav-link').click()

        cy.get('#productName').type('Alexander Test', { delay: 5})
        cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
        cy.get('#length').type('4', { delay: 5})
        cy.get('#width').type('4', { delay: 5})
        cy.get('#height').type('12', { delay: 5})
        cy.get('#weight').type('50', { delay: 5})
        cy.get('#price').type('300', { delay: 5})
        cy.get('#quantity').type('100', { delay: 5})

        const filePath = 'AlexanderTest.jpg'

        cy.get('#formFile').attachFile(filePath, {delay: 60})
        cy.wait(5000)

        cy.get('#tagoption').select('WOMEN')

        cy.get('#submit').trigger('mouseover').click({delay: 60})
        cy.wait(5000)

        cy.get('#women-tab').trigger('mouseover').click()

        cy.contains("Alexander Test")

        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)


      })

    it('test case 2 -> Add Product failed due to missing Product Name', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()

      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
      cy.get('#length').type('4', { delay: 5})
      cy.get('#width').type('4', { delay: 5})
      cy.get('#height').type('12', { delay: 5})
      cy.get('#weight').type('50', { delay: 5})
      cy.get('#price').type('300', { delay: 5})
      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#product-name-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 3 -> Add Product failed due to missing Product Description', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})

      cy.get('#length').type('4', { delay: 5})
      cy.get('#width').type('4', { delay: 5})
      cy.get('#height').type('12', { delay: 5})
      cy.get('#weight').type('50', { delay: 5})
      cy.get('#price').type('300', { delay: 5})
      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#product-description-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 4 -> Add Product failed due to missing Length', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})
      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})

      cy.get('#width').type('4', { delay: 5})
      cy.get('#height').type('12', { delay: 5})
      cy.get('#weight').type('50', { delay: 5})
      cy.get('#price').type('300', { delay: 5})
      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#shipping-length-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 5 -> Add Product failed due to missing Width', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})
      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
      cy.get('#length').type('4', { delay: 5})
   
      cy.get('#height').type('12', { delay: 5})
      cy.get('#weight').type('50', { delay: 5})
      cy.get('#price').type('300', { delay: 5})
      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#shipping-width-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 6 -> Add Product failed due to missing Height', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})
      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
      cy.get('#length').type('4', { delay: 5})
      cy.get('#width').type('4', { delay: 5})
 
      cy.get('#weight').type('50', { delay: 5})
      cy.get('#price').type('300', { delay: 5})
      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#shipping-height-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 7 -> Add Product failed due to missing Weight', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})
      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
      cy.get('#length').type('4', { delay: 5})
      cy.get('#width').type('4', { delay: 5})
      cy.get('#height').type('12', { delay: 5})

      cy.get('#price').type('300', { delay: 5})
      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#shipping-weight-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 8 -> Add Product failed due to missing Price', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})
      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
      cy.get('#length').type('4', { delay: 5})
      cy.get('#width').type('4', { delay: 5})
      cy.get('#height').type('12', { delay: 5})
      cy.get('#weight').type('50', { delay: 5})

      cy.get('#quantity').type('100', { delay: 5})

      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#listing-price-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

    it('test case 9 -> Add Product failed due to missing Quantity', () => {
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
      cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
      cy.get('#login-password').type('admin123', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      cy.get('[href="/dashboard/addproduct"] > .nav-link').click()
      cy.get('#productName').type('Alexander', { delay: 5})
      cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
      cy.get('#length').type('4', { delay: 5})
      cy.get('#width').type('4', { delay: 5})
      cy.get('#height').type('12', { delay: 5})
      cy.get('#weight').type('50', { delay: 5})
      cy.get('#price').type('300', { delay: 5})


      const filePath = 'Alexander.jpg'

      cy.get('#formFile').attachFile(filePath, {delay: 60})
      cy.wait(5000)

      cy.get('#tagoption').select('WOMEN')

      cy.get('#submit').trigger('mouseover').click({delay: 60})
      cy.wait(5000)

      cy.get('#listing-quantity-error').should('have.text', 'Please fill out this field.')

      cy.get('#dashboardDropDown').trigger('mouseover').click()
      cy.get(':nth-child(3) > .dropdown-item').click()
      cy.wait(1000)
 
    })

        it('test case 10 -> Successfully Added a Product for Men', () => {
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
        cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(2000)

        cy.get('[href="/dashboard/addproduct"] > .nav-link').click()

        cy.get('#productName').type('Alexander', { delay: 5})
        cy.get('#productDesc').type('Polo Sport Inspired', { delay: 5})
        cy.get('#length').type('4', { delay: 5})
        cy.get('#width').type('4', { delay: 5})
        cy.get('#height').type('12', { delay: 5})
        cy.get('#weight').type('50', { delay: 5})
        cy.get('#price').type('300', { delay: 5})
        cy.get('#quantity').type('100', { delay: 5})

        const filePath = 'Alexander.jpg'

        cy.get('#formFile').attachFile(filePath, {delay: 60})
        cy.wait(5000)

        cy.get('#tagoption').select('MEN')

        cy.get('#submit').trigger('mouseover').click({delay: 60})
        cy.wait(5000)

        cy.get('#men-tab').trigger('mouseover').click()

        cy.contains("Alexander")

        cy.get('#dashboardDropDown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.wait(1000)


      })

        it('test case 11 -> Successfully Added a Product for Women', () => {
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
        cy.get('#login-email').type('admin1@gmail.com', { delay: 5})
        cy.get('#login-password').type('admin123', { delay: 5})
        cy.get('form > .mt-4 > .row > .btn').click()
        cy.wait(2000)

        cy.get('[href="/dashboard/addproduct"] > .nav-link').click()

        cy.get('#productName').type('Adelaide', { delay: 5})
        cy.get('#productDesc').type('Burberry Inspired', { delay: 5})
        cy.get('#length').type('4', { delay: 5})
        cy.get('#width').type('4', { delay: 5})
        cy.get('#height').type('12', { delay: 5})
        cy.get('#weight').type('50', { delay: 5})
        cy.get('#price').type('300', { delay: 5})
        cy.get('#quantity').type('100', { delay: 5})

        const filePath = 'Adelaide.jpg'

        cy.get('#formFile').attachFile(filePath, {delay: 60})
        cy.wait(5000)

        cy.get('#tagoption').select('WOMEN')

        cy.get('#submit').trigger('mouseover').click({delay: 60})
        cy.wait(5000)

        cy.get('#women-tab').trigger('mouseover').click()

        cy.contains("Adelaide")

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
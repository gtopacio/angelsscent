describe('Checkout Test Suits', () => {
    it('test case 1 -> NCR, less than 1 kg', () => {
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

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '50g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 100
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱135.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 2 -> NCR, more than 1 kg', () => {
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

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1050g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱180.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 3 -> N. Luzon, less than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('2dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Minato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Bulacan')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '50g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 165
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱165.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 4 -> N. Luzon, more than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('2dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Minato')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Bulacan')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1050g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱210.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 5 -> S. Luzon, less than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('3dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Estelle')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Camarines Sur')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '50g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 165
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱165.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 6 -> S. Luzon, more than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('3dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Estelle')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Camarines Sur')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1050g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱210.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 7 -> Visayas, less than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('4dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Hamuko')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Cebu')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '50g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 165
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱175.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 8 -> Visayas, more than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('4dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Hamuko')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Cebu')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1050g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱220.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 9 -> Mindanao, less than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('5dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Mikaela')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Zamboanga del Norte')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '50g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 165
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱175.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 10 -> Mindanao, more than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('5dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Mikaela')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Zamboanga del Norte')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1050g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱220.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 11 -> Islander, less than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('6dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Marinette')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Palawan')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '50g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 165
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱175.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 12 -> Islander, more than 1 kg', () => {
      cy.visit(Cypress.env('test_host_url'))

      cy.contains('SHOP NOW')
      cy.contains('SHOP NOW').trigger('mouseover').click()


      // enter home
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(1) > .dropdown-item').click()
      cy.wait(1000)
      cy.get('#login-email').type('6dummy@gmail.com', { delay: 5})
      cy.get('#login-password').type('dumdumz', { delay: 5})
      cy.get('form > .mt-4 > .row > .btn').click()
      cy.wait(2000)

      // login successful for dummy1 --> check account info
      cy.get('.account-header').should('have.text', '\r\n         Products\r\n    ')
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.wait(1000)
      cy.get('[href="/account/info"] > .dropdown-item').trigger('mouseover').click()
      cy.get('.flex-column > .account-info > .account-section > :nth-child(1) > .section-body').should('have.text', 'Marinette')
      cy.get(':nth-child(2) > .account-info > .account-section > :nth-child(3) > .section-body').should('have.text', 'Palawan')

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get(':nth-child(1) > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.get('.plus').trigger('mouseover').click()
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.wait(2000)
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      cy.wait(2000)
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get(':nth-child(4) > :nth-child(2)').should('have.text', '1050g')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4)').should('have.text', '₱220.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
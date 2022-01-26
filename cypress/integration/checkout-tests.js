describe('Checkout Test Suits', () => {
    it('test case 1 -> luzon, less than 1 kg, P100 shipping fee', () => {
      cy.visit(Cypress.env('test_host_url'))

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

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get('#women > .d-flex > .card > a > .text-uppercase').trigger('mouseover').click()
      cy.get('.product-title').should('have.text', 'Babiel')
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get('.light').should('have.text', '50ML')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and weight is only 50 ml so shipping fee is 100
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(4)').should('have.text', '₱100.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })

    it('test case 2 -> luzon, more than 1 kg, P200 shipping fee', () => {
      cy.visit(Cypress.env('test_host_url'))

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

      // return to products --> add 1 product to cart
      cy.get('[href="/products"] > .nav-link').trigger('mouseover').click()
      cy.get('#women > .d-flex > .card > a > .text-uppercase').trigger('mouseover').click()
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
      cy.contains('ADD TO CART').trigger('mouseover').click()
      cy.get('.modal-body > .justify-content-center > .btn-container > .btn').trigger('mouseover').click()
      

      // go to cart --> confirm if babiel is added --> proceed to checkout
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.text-left > :nth-child(1)').should('have.text', 'Babiel')
      cy.get('.light').should('have.text', '50ML')
      cy.get('.w-100 > .shadow').should('have.text', 'Proceed to Checkout').trigger('mouseover').click()

      // verify checkout information --> antipolo and total weight is 1000 ml so shipping fee is 200
      cy.get(':nth-child(1) > .order-title').should('have.text', 'CART SUMMARY')
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(4)').should('have.text', '₱200.00')

      // return to cart and remove item
      cy.get('[href="/cart"] > .nav-link').trigger('mouseover').click()
      cy.get('.remove').trigger('mouseover').click()
      cy.get('.row > :nth-child(1) > .btn').trigger('mouseover').click()

      // log out
      cy.get('#accountDropdown').trigger('mouseover').click()
      cy.get(':nth-child(4) > .dropdown-item').trigger('mouseover').click()
    })
  })
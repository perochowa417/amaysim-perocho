describe('Manage Settings for Amaysim', function () {
  beforeEach(() => {

    cy.intercept('POST', 'https://api.segment.io/v1/t*')
      .as('waitHomePage')

    cy.intercept('GET', 'https://ct.pinterest.com/user/*')
      .as('waitLogInPage')

    cy.intercept('GET', 'https://api.amaysim.com.au/services/*')
      .as('waitAccountPage')

    cy.visit('www.amaysim.com.au') 
      .wait('@waitHomePage')
  
  })


  it('Navigate to site and verify title', function () { 

    cy.title()
      .should('contain', 'amaysim')

  }) 

  it('Log in', function () { 

    cy.get('[class="icon-link theme-inline-orange icon-user margin-none"]') 
      .click()
      .wait('@waitLogInPage')

    cy.url()
      .should('eq', 'https://accounts.amaysim.com.au/identity/login')

    cy.get('[id="username"]')
      .should('be.visible')
      .type('0466134574')

    cy.get('[id="password"]')
      .should('be.visible')
      .type('AWqasde321')

    cy.get('[name="button"][type="submit"]')
      .should('be.visible')
      .click()
      .wait('@waitHomePage')

  }) 

  it('Open Settings Page', function () { 

    cy.get('[class="icon-link theme-inline-orange icon-user margin-none"]') 
      .click()
      .wait('@waitLogInPage')

    cy.url()
      .should('eq', 'https://accounts.amaysim.com.au/identity/login')

    cy.get('[id="username"]')
      .should('be.visible')
      .type('0466134574')

    cy.get('[id="password"]')
      .should('be.visible')
      .type('AWqasde321')

    cy.get('[name="button"][type="submit"]')
      .should('be.visible')
      .click()
      .wait('@waitHomePage')

    cy.get('[data-automation-id="mobile-tileheader"]')
      .contains('0434 956 082')
      .click()

  })

  
})

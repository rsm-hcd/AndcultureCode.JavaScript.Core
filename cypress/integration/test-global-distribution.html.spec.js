/// <reference types="cypress" />

context('test-global-distribution.html', () => {
  it('when visiting then does not throw any errors', () => {
    cy.visit('test-global-distribution.html');
  })
})

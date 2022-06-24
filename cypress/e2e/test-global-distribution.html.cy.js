/// <reference types="cypress" />

context('test-global-distribution.html', () => {
  it('when visiting then does not throw any errors', () => {

    /*
      The following will load the given HTML file, read in any external dependencies via script
      tags, and proceed to execute various code paths to validate those external dependencies are
      properly loaded.
    */

    // Arrange, Act, Assert
    cy.visit('test-global-distribution.html');
  })
})

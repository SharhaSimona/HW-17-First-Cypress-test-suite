/// <reference types="cypress" />

describe('Checkbox Test', () => {
  it('should toggle checkboxes correctly', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes'); 
    // Verify that the title exist
    cy.get('h3').should('have.text', 'Checkboxes');

    // Verify that the first checkbox is unchecked by default
    cy.get('input[type="checkbox"]:eq()').should('not.be.checked');
   
    // Check the first checkbox and verify it is checked
    cy.get('input[type="checkbox"]:eq()').check().should('be.checked');
   
    // Uncheck the first checkbox and verify it is unchecked
    cy.get('input[type="checkbox"]:eq()').uncheck().should('not.be.checked');
   
  })
})
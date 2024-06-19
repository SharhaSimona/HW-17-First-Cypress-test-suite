/// <reference types="cypress" />

describe('Inputs test', () => {
    it('should be able to enter and verify input value', () => {
      cy.visit('https://the-internet.herokuapp.com/inputs'); 
      // Verify that the title exist
      cy.get('h3').should('have.text', 'Inputs');

      // Verify that the sub-title exist
      cy.get('p').should('have.text', 'Number');
      

      // Find input element and type a value
      cy.get('input[type="number"]').type('4');

      // Verify that the entered value is correct
      cy.get('input[type="number"]').should('have.value', '4');
  
  })
})
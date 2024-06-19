/// <reference types="cypress" />

describe('Dropdown test', () => {
      it('should show Dropdown List correctly', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown'); 
        // Verify that the title exist
        cy.get('h3').should('have.text', 'Dropdown List');
  
        // Select the first option from the dropdown and verify it is selected
        cy.get('#dropdown').select('Option 1').should('have.value', '1');
    
        // Select the second option from the dropdown and verify it is selected
        cy.get('#dropdown').select('Option 2').should('have.value', '2');
    
    })
  })
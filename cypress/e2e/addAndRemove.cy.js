/// <reference types="cypress" />

describe('Add and Remove Elements Test', () => {
    it('should add and remove elements correctly', () => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
      
      // Click the "Add Element" button
      cy.contains('button', 'Add Element').click();
    
      // Verify that an element has been added
      cy.get('.added-manually').should('exist', { timeout: 5000 });
      
      // Click the "Delete" button to remove the added element
      cy.get('.added-manually').contains('button', 'Delete').click();
      
      // Verify that the element has been removed
      cy.get('.added-manually').should('not.exist', { timeout: 5000 });
    })
  })
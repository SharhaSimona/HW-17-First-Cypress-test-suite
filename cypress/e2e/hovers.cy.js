/// <reference types="cypress" />

describe('Hovers test', () => {
    it('should display user information when hovering over an avatar', () => {
      cy.visit('https://the-internet.herokuapp.com/hovers'); 
      // Verify that the title exist
      cy.get('h3').should('have.text', 'Hovers');

      // Verify that the sub-title exist
      cy.get('p').should('have.text', 'Hover over the image for additional information');
      
        // Hover over the first avatar
        cy.get('.figure').eq(0).invoke('mouseover');
        
        // Verify that the  information is displayed for the first avatar
        cy.get('div.figcaption')
        .eq(0).invoke('show')
        .wait(1000)
        .should('be.visible','have.text', '\n name: user1\n View profile\n&nbsp;&nbsp;&nbsp;&nbsp;')
        .trigger('mouseleave');
        
    
        // Hover over the second avatar
        cy.get('.figure').eq(1).invoke('mouseover');
    
        // Verify that the user information is displayed for the second avatar
        cy.get('div.figcaption')
        .eq(1).invoke('show')
        .wait(1000)
        .should('be.visible','have.text', '\n name: user2\n View profile\n&nbsp;&nbsp;&nbsp;&nbsp;')
        .trigger('mouseleave');
  
  })
})


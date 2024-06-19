/// <reference types="cypress" />

describe('Login Page test', () => {
    it('should login correctly', () => {
      cy.visit('https://the-internet.herokuapp.com/login'); 
      // Verify that the title exist
      cy.get('h2').should('have.text', 'Login Page');

      // Verify that the sub-title exist
      cy.get('h4.subheader').should('have.text', 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
      

      // Enter valid username and password
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
 
      // Click on the Login button
      cy.get('.radius').click()
 
     // Verify that successful login message is displayed
     cy.contains('You logged into a secure area!').should('be.visible')
  
  })
})
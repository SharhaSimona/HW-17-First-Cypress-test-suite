/// <reference types="cypress" />

describe('Horizontal Slider test', () => {
    it('should range Horizontal Slider correctly', () => {
      cy.visit('https://the-internet.herokuapp.com/horizontal_slider'); 
      // Verify that the title exist
      cy.get('h3').should('have.text', 'Horizontal Slider');

      // Verify that the sub-title exist
      cy.get('h4.subheader').should('have.text', 'Set the focus on the slider (by clicking on it) and use the arrow keys to move it right and left. Or click and drag the slider with your mouse. It will indicate the value of the slider to the right.');
      
      // Move the slider to a specific value
      cy.get('.sliderContainer input[type="range"]').invoke('val', '2.5').trigger('input')

      // Verify that the slider value is set correctly
      cy.get('.sliderContainer input[type="range"]').should('have.value', '2.5')
  
  })
})
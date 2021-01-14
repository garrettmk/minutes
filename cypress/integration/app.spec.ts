/// <reference types="cypress" />

//beforeEach(() => {
//  cy.visit('http://localhost:3000')
//});

it('should start in the stopped state', () => {
  cy.getByRole('timer')
    .should('be.visible');

  cy.getByTestId('start-button')
    .should('be.visible');

  cy.getByTestId('select-alarm')
    .should('be.visible');

  cy.getByTestId('reset-button')
    .should('not.exist');

  cy.getByTestId('pause-button')
    .should('not.exist');

  cy.getByTestId('resume-button')
    .should('not.exist');
});


it('should have a nonzero default duration', () => {
  cy.getByRole('timer')
    .invoke('val')
    .then(text => {
      expect(parseInt(text)).to.be.greaterThan(0);
    });
});


it('should start with an alarm selected', () => {
  cy.getByTestId('select-alarm')
    .get(':selected')
    .invoke('text')
    .then(text => {
      expect(text.toLowerCase()).not.to.equal('none');
    })
});


it('should enter the running state when start is pressed', () => {
  cy.getByTestId('start-button').click();
  cy.getByRole('timer').should('be.visible');
  cy.getByTestId('select-alarm').should('be.visible');
  cy.getByTestId('reset-button').should('be.visible');
  cy.getByTestId('pause-button').should('be.visible');
  cy.getByTestId('start-button').should('not.exist');
});


it('should enter the paused state if pause is pressed', () => {
  cy.getByTestId('start-button').click();
  cy.getByTestId('pause-button').click();

  cy.getByRole('timer').should('be.visible');
  cy.getByTestId('select-alarm').should('be.visible');
  cy.getByTestId('reset-button').should('be.visible');
  cy.getByTestId('resume-button').should('be.visible');
  cy.getByTestId('pause-button').should('not.exist');
  cy.getByTestId('start-button').should('not.exist');
});


it('should enter the running state when resume is pressed', () => {
  cy.getByTestId('start-button').click();
  cy.getByTestId('pause-button').click();
  cy.getByTestId('resume-button').click();

  cy.getByRole('timer').should('be.visible');
  cy.getByTestId('select-alarm').should('be.visible');
  cy.getByTestId('reset-button').should('be.visible');
  cy.getByTestId('pause-button').should('be.visible');
  cy.getByTestId('start-button').should('not.exist');
});


it('should count down each minute', () => {
  const checkDurationText = value => cy.getByRole('timer')
    .invoke('val')
    .then(text => {
      expect(parseInt(text)).to.equal(value);
    });

  cy.getByRole('timer')
    .invoke('val')
    .then(text => {
      const duration = parseInt(text);

      cy.getByTestId('start-button')
        .click();

      for (let i=duration; i>0; i--) {
        checkDurationText(i);
        cy.wait(60 * 1000 - 1);
        checkDurationText(i);
        cy.wait(1);
      }
    })
})

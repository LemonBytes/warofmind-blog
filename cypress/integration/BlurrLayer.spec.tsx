import { describe } from 'mocha';

describe(`the blurr area  is not rendered when navigation is not clicked`, () => {
  it('should not exist', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#blurrLayer').should('not.exist');
  });
});

describe(`the blurrArea is rendered when navigation is clicked`, () => {
  it('its is rendered properly', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigation').click();
    cy.get('#blurrLayer').should('be.visible');
  });
});

describe(`if device is larger than 600px BlurrArea shoulndt be visible`, () => {
  it('its is rendered properly', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(601, 700);
    cy.get('#blurrLayer').should('not.exist');
  });
});

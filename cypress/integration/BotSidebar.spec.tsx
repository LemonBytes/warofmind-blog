import { describe } from 'mocha';

describe(`the sidebar not be visible`, () => {
  it('its is rendered properly', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#botSidebar').should('not.be.visible');
  });
});

describe(`the sidebar should be rendered`, () => {
  it('its is rendered properly', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigation').click();
    cy.get('#botSidebar').should('be.visible');
  });
});

describe(`if device is larger than 600px BlurrArea shoulndt be visible`, () => {
  it('its is rendered properly', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(601, 700);
    cy.get('#botSidebar').should('not.be.visible');
  });
});

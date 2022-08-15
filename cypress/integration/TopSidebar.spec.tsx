import { describe } from 'mocha';

describe(`the sidebar not be visible`, () => {
  it('has width 0', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#topSideBar').should('not.be.visible');
  });
});

describe(`the top sidebar should be rendered`, () => {
  it('should be visible', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigation').click();
    cy.get('#topSideBar').should('be.visible');
  });
});

describe(`the top side should contain strong`, () => {
  it('has one strong ', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#navigation').click();
    cy.get('#topSideBar').contains('strong', 'WAR OF MIND');
  });
});

describe(`if device is larger than 600px Topbar shoulndt be visible`, () => {
  it('its should not be visbible', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(601, 700);
    cy.get('#topBar').should('not.be.visible');
  });
});

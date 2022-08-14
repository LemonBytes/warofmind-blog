import { describe } from 'mocha';

describe(`the Linkbox should contain links`, () => {
  it('should be 8 links', () => {
    cy.viewport(400, 550);
    cy.visit('http://localhost:3000/');
    cy.get('#navigation').click();
    cy.get('#linkCon').should('be.visible');
  });
});

describe(`the Linkbox should contain links`, () => {
  it('should be 8 links', () => {
    cy.viewport(400, 550);
    cy.visit('http://localhost:3000/');
    cy.get('#navigation').click();
    cy.get('#linkCon').contains('a', 'ALL POSTS');
    cy.get('#linkCon').contains('a', 'BOXING');
    cy.get('#linkCon').contains('a', 'KICKBOXING');
    cy.get('#linkCon').contains('a', 'MUAY THAI');
    cy.get('#linkCon').contains('a', 'BJJ');
    cy.get('#linkCon').contains('a', 'MIND');
    cy.get('#linkCon').contains('a', 'REVIEWS');
  });
});

describe(`link box should be visible on large device`, () => {
  it('click navigation button and show menu with linkBox', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1024, 800);
    cy.get('#openMenu').click();
    cy.get('#linkCon').contains('a', 'ALL POSTS');
    cy.get('#linkCon').contains('a', 'BOXING');
    cy.get('#linkCon').contains('a', 'KICKBOXING');
    cy.get('#linkCon').contains('a', 'MUAY THAI');
    cy.get('#linkCon').contains('a', 'BJJ');
    cy.get('#linkCon').contains('a', 'MIND');
    cy.get('#linkCon').contains('a', 'REVIEWS');
  });
});

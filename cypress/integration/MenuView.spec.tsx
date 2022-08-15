import { describe } from 'mocha';

describe(`if header is clicked the menu should open`, () => {
  it('should open the menu', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1024, 800);
    cy.get('#openMenu').click();
    cy.get('#menuView').should('be.visible');
  });
});

describe(`if menu is not open links should not be visible`, () => {
  it('should contain linkContiner', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1024, 800);
    cy.get('#linkCon').should('not.be.visible');
  });
});

describe(`linkcContainer should be visible on large device`, () => {
  it('click navigation button and show menu within linkBox', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1024, 800);
    cy.get('#openMenu').click();
    cy.get('#linkCon').should('be.exist');
    cy.get('#linkCon').contains('a', 'ALL POSTS');
    cy.get('#linkCon').contains('a', 'BOXING');
    cy.get('#linkCon').contains('a', 'KICKBOXING');
    cy.get('#linkCon').contains('a', 'MUAY THAI');
    cy.get('#linkCon').contains('a', 'BJJ');
    cy.get('#linkCon').contains('a', 'MIND');
    cy.get('#linkCon').contains('a', 'REVIEWS');
  });
});

describe(`linkcContainer should be visible on large device`, () => {
  it('click navigation button and show menu within linkBox', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1024, 800);
    cy.get('#openMenu').click();
    cy.get('#linkCon').should('be.exist');
    cy.get('#linkCon')
      .contains('a', 'BOXING')
      .trigger('mouseover', { force: true });
    cy.get('#previewBox').should('be.visible');
    cy.get('#previewBox').should('contain', 'video');
  });
});

import { describe } from "mocha";

describe(`the sidebar not be visible`, () => {
  it("has width 0", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#topSideBar").should("not.be.visible");
  });
});

describe(`the top sidebar should be rendered`, () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#topSideBar").should("be.visible");
  });
});

describe(`the top side should contain h1`, () => {
  it("has one h1 ", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#topSideBar").contains("h1", "War of Mind");
  });
});

describe(`the top bar should have a img`, () => {
  it("has one image ", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#topBar").contains("img");
  });
});

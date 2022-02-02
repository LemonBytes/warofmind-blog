import { describe } from "mocha";

describe(`the sidebar not be visible`, () => {
  it("its is rendered properly", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#botSidebar").should("not.be.visible");
  });
});

describe(`the sidebar should be rendered`, () => {
  it("its is rendered properly", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#botSidebar").should("be.visible");
  });
});

describe(`the sidebar should contain links`, () => {
  it("should be 8 links", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#botSidebar").contains("a", "All Posts");
    cy.get("#botSidebar").contains("a", "Boxing");
    cy.get("#botSidebar").contains("a", "Kickboxing");
    cy.get("#botSidebar").contains("a", "Muay Thai");
    cy.get("#botSidebar").contains("a", "BJJ");
    cy.get("#botSidebar").contains("a", "Mind");
    cy.get("#botSidebar").contains("a", "Reviews");
    cy.get("#botSidebar").contains("a", "Contact");
  });
});

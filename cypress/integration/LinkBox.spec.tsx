import { describe } from "mocha";

describe(`the Linkbox should contain links`, () => {
  it("should be 8 links", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#linkBox").should("be.visible");
  });
});

describe(`the Linkbox should contain links`, () => {
  it("should be 8 links", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#linkBox").contains("a", "ALL POSTS");
    cy.get("#linkBox").contains("a", "BOXING");
    cy.get("#linkBox").contains("a", "KICKBOXING");
    cy.get("#linkBox").contains("a", "MUAY THAI");
    cy.get("#linkBox").contains("a", "BJJ");
    cy.get("#linkBox").contains("a", "MIND");
    cy.get("#linkBox").contains("a", "REVIEWS");
  });
});

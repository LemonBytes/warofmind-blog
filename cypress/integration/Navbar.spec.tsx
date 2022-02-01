import { it } from "mocha";

describe(`the navigation component should be rendered in the right corner
with an image inside`, () => {
  it("should be rendered", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navbar").find("img").should("be.visible");
  });
});

describe(`if the navigation is clicked the openClose function should be triggerd`, () => {
  it("its is rendered properly", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navigation").click();
    cy.get("#sidebar").should("be.visible");
  });
});

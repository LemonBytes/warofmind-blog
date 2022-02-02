import { describe } from "mocha";

describe(`the navigation component should be rendered in the right corner
with an image inside`, () => {
  it("should be rendered", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navbar").find("img").should("be.visible");
  });
});

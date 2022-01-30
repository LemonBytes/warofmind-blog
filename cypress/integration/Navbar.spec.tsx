import { it } from "mocha";

it("should be rendered", () => {
  cy.visit("http://localhost:3000/");
  cy.get("nav").should("be.visible");
});

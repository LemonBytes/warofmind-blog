import { describe } from "mocha";

describe(`the navigation component should be rendered in the right corner
with an image inside`, () => {
  it("should be rendered", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#navbar").find("img").should("be.visible");
  });
});

describe(`if device is larger than 600px BlurrArea shoulndt be visible`, () => {
  it("its is rendered properly", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(601, 700);
    cy.get("#navbar").should("not.be.visible");
  });
});

describe(`if device is larger than 600px Header should be visible`, () => {
  it("its is rendered properly", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 800);
    cy.get("#navHead").should("be.visible");
  });
});

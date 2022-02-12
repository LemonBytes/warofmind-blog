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
    cy.get("#largeViewHeader").should("be.visible");
  });
});

describe(`Header contains correct text`, () => {
  it("should display WAR OF MIND", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 800);
    cy.get("#largeViewHeader").should("contain", "WAR OF MIND");
  });
});

describe(`if header is clicked the menu should open`, () => {
  it("should open the menu", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 800);
    cy.get("#largeViewHeader").click();
    cy.get("#menuView").should("be.visible");
  });
});

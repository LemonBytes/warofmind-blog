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
    cy.get("#mobileView").should("not.be.visible");
  });
});

describe(`if device is larger than 600px Header should be visible`, () => {
  it("its is rendered properly", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 800);
    cy.get("#largeViewHeader").should("be.visible");
  });
});

describe(`if device is larger than 600px Topbar should be visible`, () => {
  it("should contain the logo and the contact link", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 800);
    cy.get("#topbar").should("be.visible");
    cy.get("#topbar").contains("img");
    cy.get("#topbar").contains("a", "CONTACT");
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

describe(`legal notice link is visible`, () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1024, 800);
    cy.get("#legalNotice").should("be.visible");
  });
});

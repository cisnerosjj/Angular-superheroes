// Welcome to Cypress!

describe("example to-do app", () => {
  beforeEach(() => {
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:4200/");
  });
  it("Show Search page", () => {
    cy.visit("http://localhost:4200/superheroes/search");
    cy.get('input[type="text"]').type("Batman");
    cy.contains("span", "Batman").should("be.visible");
  });
});

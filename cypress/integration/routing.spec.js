describe("routing test", () => {
  it("home rout", () => {
    cy.visit("/");
  });
  it("string rout", () => {
    cy.visit("/recursion");
  });
  it("fibonacci rout", () => {
    cy.visit("/fibonacci");
  });
  it("sorting rout", () => {
    cy.visit("/sorting");
  });
  it("stack rout", () => {
    cy.visit("/stack");
  });
  it("queue rout", () => {
    cy.visit("/queue");
  });
  it("list rout", () => {
    cy.visit("/list");
  });
});

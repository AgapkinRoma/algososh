Cypress.Commands.add("visitWithInputAndButton", (url, input, buttonText) => {
  cy.visit(url);
  cy.get(input).should("be.empty");
  cy.contains(buttonText).should("be.disabled");
});

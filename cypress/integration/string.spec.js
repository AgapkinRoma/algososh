import {
  defaultCircle,
  chagingCircle,
  modifiedCircle,
  CIRCLE,
} from "./utils/utils";

describe("string test", () => {
  it("empty input button disabled", () => {
    cy.visitWithInputAndButton("/recursion", "input", "Развернуть");
  });
  it("Корректная отработка алгоритма разворота строки", () => {
    cy.get("input").type("strng");
    cy.contains("Развернуть").click();
    cy.get(CIRCLE).as("circle").should("have.length", 5);
    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", chagingCircle)
      .contains("s");
    cy.get("@circle")
      .eq(1)
      .should("have.css", "border", defaultCircle)
      .contains("t");
    cy.get("@circle")
      .eq(2)
      .should("have.css", "border", defaultCircle)
      .contains("r");
    cy.get("@circle")
      .eq(3)
      .should("have.css", "border", defaultCircle)
      .contains("n");
    cy.get("@circle")
      .eq(4)
      .should("have.css", "border", chagingCircle)
      .contains("g");
    cy.wait(1000);
    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", modifiedCircle)
      .contains("g");
    cy.get("@circle")
      .eq(1)
      .should("have.css", "border", chagingCircle)
      .contains("t");
    cy.get("@circle")
      .eq(2)
      .should("have.css", "border", defaultCircle)
      .contains("r");
    cy.get("@circle")
      .eq(3)
      .should("have.css", "border", chagingCircle)
      .contains("n");
    cy.get("@circle")
      .eq(4)
      .should("have.css", "border", modifiedCircle)
      .contains("s");

    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", modifiedCircle)
      .contains("g");
    cy.get("@circle")
      .eq(1)
      .should("have.css", "border", modifiedCircle)
      .contains("n");
    cy.get("@circle")
      .eq(2)
      .should("have.css", "border", modifiedCircle)
      .contains("r");
    cy.get("@circle")
      .eq(3)
      .should("have.css", "border", modifiedCircle)
      .contains("t");
    cy.get("@circle")
      .eq(4)
      .should("have.css", "border", modifiedCircle)
      .contains("s");
    cy.get("input").clear();
  });
});

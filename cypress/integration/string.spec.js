import { defaultCircle, chagingCircle, modifiedCircle } from "./utils/utils";

describe("string test", () => {
  it("empty input button disabled", () => {
    cy.visit("/recursion");
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled");
  });
  it("Корректная отработка алгоритма разворота строки", () => {
    cy.get("input").type("tests")
    cy.contains("Развернуть").click();
    cy.get("[class^=circle_circle]").as("circle").should("have.length", 5);
    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", chagingCircle)
      .contains("t");
    cy.get("@circle")
      .eq(1)
      .should("have.css", "border", defaultCircle)
      .contains("e");
    cy.get("@circle")
      .eq(2)
      .should("have.css", "border", defaultCircle)
      .contains("s");
    cy.get("@circle")
      .eq(3)
      .should("have.css", "border", defaultCircle)
      .contains("t");
    cy.get("@circle")
      .eq(4)
      .should("have.css", "border", chagingCircle)
      .contains("s");
    cy.wait(1000);
    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", modifiedCircle)
      .contains("s");
    cy.get("@circle")
      .eq(1)
      .should("have.css", "border", chagingCircle)
      .contains("e");
    cy.get("@circle")
      .eq(2)
      .should("have.css", "border", defaultCircle)
      .contains("s");
    cy.get("@circle")
      .eq(3)
      .should("have.css", "border", chagingCircle)
      .contains("t");
    cy.get("@circle")
      .eq(4)
      .should("have.css", "border", modifiedCircle)
      .contains("t");

    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", modifiedCircle)
      .contains("s");
    cy.get("@circle")
      .eq(1)
      .should("have.css", "border", modifiedCircle)
      .contains("t");
    cy.get("@circle")
      .eq(2)
      .should("have.css", "border", modifiedCircle)
      .contains("s");
    cy.get("@circle")
      .eq(3)
      .should("have.css", "border", modifiedCircle)
      .contains("e");
    cy.get("@circle")
      .eq(4)
      .should("have.css", "border", modifiedCircle)
      .contains("t");
    cy.get("input").clear();
  
  });
});

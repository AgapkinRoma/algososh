import { chagingCircle, defaultCircle } from "./utils/utils";

describe("stack tests", () => {
  it("empty button input disabled", () => {
    cy.visit("/stack");
    cy.get("input").should("be.empty");
    cy.contains("Добавить").should("be.disabled");
  });
  it("Проверка на добавление в стэк", () => {
    cy.get("input").type("stck");
    cy.contains("Добавить").click();
    cy.get("[class^=circle_circle__]").as("circle");
    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", chagingCircle)
      .contains("stck");
    cy.wait(500);
    cy.get("@circle")
      .eq(0)
      .should("have.css", "border", defaultCircle)
      .contains("stck");
    cy.get("[class^=circle_content__]").as("circleContent");
    cy.get("@circleContent").first().contains("top"); //children("div:first").should("have.text", "top");
    cy.get("@circleContent").first().contains("0"); //children("p").should("have.text", "0");
  });
  it("Проверка на удаление из стэка", () => {
    cy.contains("Удалить").click();
    cy.wait(500);
    cy.get("[class^=circle_circle__]").as("circle").should("have.length", 0);
  });
  it("Проверка кнопки очистить", () => {
    cy.get("input").type("stck");
    cy.wait(1000);
    cy.get("input").type("stck2");
    cy.contains("Добавить").click();
    cy.wait(1000);
    cy.contains("Очистить").click();
    cy.wait(1000);
    cy.get("[class^=circle_circle__]").as("circle").should("have.length", 0);
    cy.contains("Очистить").should("be.disabled");
  });
});

import { CIRCLE, CIRCLE_CONTENT, CIRCLE_SMALL, chagingCircle, defaultCircle, modifiedCircle } from "./utils/utils";

describe("linkedList tests", () => {
  it("empty input button disabled", () => {
    cy.visit("/list");
    cy.get("input").should("be.empty");
    cy.contains("Добавить в head").should("be.disabled");
    cy.contains("Добавить в tail").should("be.disabled");
    cy.contains("Добавить по индексу").should("be.disabled");
    cy.contains("Удалить по индексу").should("be.disabled");
  });
  it("Отрисовка дефолтного списка", () => {
    cy.get(CIRCLE_CONTENT).first().contains("head");
    cy.get(CIRCLE).should(
      "have.css",
      "border",
      defaultCircle
    );
    cy.get(CIRCLE_CONTENT).last().contains("tail");
  });
  it("Добавления элемента в head", () => {
    cy.get("input").first().type("head");
    cy.contains("Добавить в head").click();
    cy.get(CIRCLE_SMALL)
      .should("have.css", "border", chagingCircle)
      .contains("head");
    cy.wait(1000);
    cy.get(CIRCLE)
      .first()
      .should("have.css", "border", modifiedCircle)
      .contains("head");
    cy.get(CIRCLE_CONTENT).first().contains("head");
    cy.wait(1000);
    cy.get(CIRCLE)
      .should("have.css", "border", defaultCircle)
      .contains("head");
  });
  it("Добавление элемента в tail", () => {
    cy.get("input").first().type("tail");
    cy.contains("Добавить в tail").click();
    cy.get(CIRCLE_SMALL)
      .should("have.css", "border", chagingCircle)
      .contains("tail");
    cy.wait(1000);
    cy.get(CIRCLE)
      .last()
      .should("have.css", "border", modifiedCircle)
      .contains("tail");
    cy.get(CIRCLE_CONTENT).last().contains("tail");
    cy.wait(1000);
    cy.get(CIRCLE)
      .last()
      .should("have.css", "border", defaultCircle)
      .contains("tail");
  });
  it("Добавления элемента по индексу", () => {
    cy.get("input").first().type("elem");
    cy.get("input").last().type(1);
    cy.contains("Добавить по индексу").click();
    cy.get(CIRCLE_SMALL)
      .should("have.css", "border", chagingCircle)
      .contains("elem");
    cy.get(CIRCLE)
      .eq(0)
      .should("have.css", "border", chagingCircle);
    cy.get(CIRCLE)
      .eq(1)
      .should("have.css", "border", defaultCircle);
    cy.wait(500);
    cy.get(CIRCLE)
      .eq(1)
      .should("have.css", "border", modifiedCircle);
    cy.get(CIRCLE)
      .eq(1)
      .should("have.css", "border", defaultCircle);
  });
  it("Удаление элемента по индексу", () => {
    cy.get("input").last().type(1);
    cy.contains("Удалить по индексу").click();
    cy.get(CIRCLE)
      .eq(0)
      .should("have.css", "border", chagingCircle);
    cy.wait(1000);
    cy.get(CIRCLE)
      .eq(1)
      .should("have.css", "border", chagingCircle);
    cy.get(CIRCLE_SMALL).should("have.css", "border", chagingCircle);
    cy.wait(1000);
    cy.get(CIRCLE)
      .eq(1)
      .should("have.css", "border", defaultCircle);
  });
  it("Удаление элемента из head", () => {
    cy.contains("Удалить из head").click();
    cy.get(CIRCLE_SMALL).should("have.css", "border", chagingCircle);
    cy.wait(1000);
    cy.get(CIRCLE_CONTENT).first().contains("head");
  });
  it("Удаление элемента из tail", () => {
    cy.contains("Удалить из tail").click();
    cy.get(CIRCLE_SMALL).should("have.css", "border", chagingCircle);
    cy.wait(1000);
    cy.get(CIRCLE_CONTENT).last().contains("tail");
  });
});

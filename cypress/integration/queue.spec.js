import { CIRCLE, CIRCLE_CONTENT } from "./utils/utils";

describe("queue tests", () => {
  it("empty input disabled button", () => {
    cy.visitWithInputAndButton("/queue", "input", "Добавить");
  });
  it("Проверка на добавление в очередь", () => {
    cy.get("input").should("be.empty").type("que");
    cy.contains("Добавить").click();

    cy.get(CIRCLE_CONTENT).first().as("firstElement");
    cy.get("@firstElement").contains("que");
    cy.get("@firstElement").contains("head");
    cy.get("@firstElement").contains("tail");
    cy.get("@firstElement").children("[class*=circle_changing]");
    cy.wait(500);
    cy.get("@firstElement").children("[class*=circle_default]");

    cy.get("input").should("be.empty").type("euq");
    cy.contains("Добавить").click();
    cy.wait(500);

    cy.get(CIRCLE_CONTENT)
      .should("have.length", 7)
      .each(($item, i) => {
        if (i === 0) {
          cy.wrap($item).contains("que");
          cy.wrap($item).contains("head");
        }
        if (i === 1) {
          cy.wrap($item).contains("euq");
          cy.wrap($item).contains("tail");
        }
      });
  });
  it("Проверка на удаление из очереди", () => {
    cy.contains("Удалить").click();
    cy.get(CIRCLE_CONTENT).first().children("[class*=circle_changing]");
    cy.wait(500);
    cy.get(CIRCLE).first().children("p").should("have.text", "");
  });
  it("Проверка на очиситку очереди", () => {
    cy.contains("Очистить").click();
    cy.get(CIRCLE).children().nextAll().should("not.exist");
    cy.contains("Очистить").should("be.disabled");
    cy.contains("Удалить").should("be.disabled");
  });
});

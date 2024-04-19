describe("queue tests", () => {
  it("empty input disabled button", () => {
    cy.visit("/queue");
    cy.get("input").should("be.empty");
    cy.contains("Добавить").should("be.disabled");
  });
  it("Проверка на добавление в очередь", () => {
    cy.get("input").should("be.empty").type("que");
    cy.contains("Добавить").click();

    cy.get("[class*=circle_content]").first().as("firstElement");
    cy.get("@firstElement").contains("que");
    cy.get("@firstElement").contains("head");
    cy.get("@firstElement").contains("tail");
    cy.get("@firstElement").children("[class*=circle_changing]");
    cy.wait(500);
    cy.get("@firstElement").children("[class*=circle_default]");

    cy.get("input").should("be.empty").type("euq");
    cy.contains("Добавить").click();
    cy.wait(500);

    cy.get("[class*=circle_content]")
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
    cy.get("[class*=circle_content]")
      .first()
      .children("[class*=circle_changing]");
    cy.wait(500);
    cy.get("[class*=circle_circle]")
      .first()
      .children("p")
      .should("have.text", "");
  });
  it("Проверка на очиситку очереди", () => {
    cy.contains("Очистить").click();
    cy.get("[class*=circle_circle]").children().nextAll().should("not.exist");
    cy.contains("Очистить").should("be.disabled");
    cy.contains("Удалить").should("be.disabled");
  });
});

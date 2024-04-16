describe("fibonacci test", () => {
  it("empty input button disabled", () => {
    cy.visit("/fibonacci");
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled");
  });
  it("correctly generate", () => {
    const res = [1, 1, 2, 3, 5];
    cy.get("input").should("be.empty").type(4);
    cy.contains("Рассчитать").click();
    cy.wait(500);
    cy.get("[class^=circle_circle__]").each(($item, i) => {
      cy.get($item).contains(res[i]);
    });
  });
});

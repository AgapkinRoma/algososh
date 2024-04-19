import { CIRCLE } from "./utils/utils";

describe("fibonacci test", () => {
  it("empty input button disabled", () => {
    cy.visitWithInputAndButton("/fibonacci", "input", "Рассчитать");
  });
  it("correctly generate", () => {
    const res = [1, 1, 2, 3, 5];
    cy.get("input").should("be.empty").type(4);
    cy.contains("Рассчитать").click();
    cy.wait(500);
    cy.get(CIRCLE).each(($item, i) => {
      cy.get($item).contains(res[i]);
    });
  });
});

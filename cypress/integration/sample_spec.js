describe("Access react docs", () => {
  it("open home page", () => {
    cy.visit("https://pt-br.reactjs.org/");
    cy.contains("Uma biblioteca JavaScript para criar interfaces de usuário");
  });
});

describe("Atividade 04 - Interface Web", () => {

  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/login.html");  // ajuste o caminho para seu arquivo
  });

  it("Deve exibir o título da página", () => {
    cy.get("h1").should("be.visible");
  });

  it("Deve exibir o formulário de login", () => {
    cy.get("form").should("be.visible");
    cy.get("input[type='text']").should("exist");
    cy.get("input[type='password']").should("exist");
  });

  it("Deve permitir digitar usuário e senha", () => {
    cy.get("input[type='text']").type("usuarioTeste");
    cy.get("input[type='password']").type("senhaTeste");
  });

  it("Deve exibir o footer com o nome completo", () => {
    cy.get("footer").should("contain.text", "Seu Nome Completo Aqui");
  });

});

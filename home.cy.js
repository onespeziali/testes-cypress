describe('Teste da Página Inicial - FlashFind', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Deve exibir o título principal', () => {
    cy.get('h1').should('be.visible');
  });

  it('Deve exibir a descrição', () => {
    cy.get('p').should('be.visible');
  });

  it('Deve ter o header com a marca', () => {
    cy.get('.brand').should('contain', 'FlashFind');
  });

  it('Deve ter links de navegação', () => {
    cy.get('nav a').should('have.length.at.least', 2);
  });

  it('Deve exibir o footer', () => {
    cy.get('footer').should('be.visible');
  });

});
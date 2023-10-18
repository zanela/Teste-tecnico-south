describe('Teste de Login e busca simples', () => {
  it('Deve fazer login com sucesso', () => {
    // Visitando o site
    cy.visit('/');

    // Abrindo o overlay
    cy.get('#overlay-open').click();

    // Realizando uma busca simples
    cy.get('.mobile-search > .search-form > label > .search-field').type("institucional");

    // Clicando no resultado da busca
    cy.get('#menu-principal-1 > .menu-item-2690 > a').click();

    // Verificando se a página correta foi carregada
    cy.get('.archive-title').should('contain.text', 'Institucional');
  });
});

  
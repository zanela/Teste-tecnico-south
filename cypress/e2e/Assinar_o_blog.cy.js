import faker from 'faker';

describe('Assinar blog por e-mail', () => {
  it('Deve assinar o blog inserindo o e-mail', () => {
    cy.visit('/');
   
    cy.get('#overlay-open').click();
    
    cy.get('#menu-principal-1 > .menu-item-type-post_type > a').click();
   
    const emailAleatorio = faker.internet.email();
    cy.get('#subscribe-field').type(emailAleatorio);
   
    cy.get('.wp-block-button__link').click();
    
    cy.get('#subscribe-blog')
      .should('contain.text', 'Obrigado! Agora, confira seu e-mail para confirmar sua assinatura.');
  });
});


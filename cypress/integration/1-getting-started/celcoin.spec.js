/// <reference types="cypress" />

describe('Automation Practice',() =>{

  it('Deverá acessar o site Automation Practice', ()=>{
      cy.visit('http://automationpractice.com/index.php')

  });

   it('Deverá realizar um cadastro e logar no sistema', ()=>{
    cy.visit('http://automationpractice.com/index.php')
    cy.wait(3000)
    cy.contains('Sign in').click() 
    
    const timestamp = new Date ().getTime()
    const email =`cadastro-${timestamp}@mail.com`;
    cy.get('#email_create').type(email) 
    cy.get('#SubmitCreate > span').click()
    cy.get('#id_gender2').click() 
    cy.get('#customer_firstname').type('Lorena')
    cy.get('#customer_lastname').type('Ribeiro dos Santos')
    cy.get('#passwd').type('123456')
    cy.get('#company').type('Celcoin')
    cy.get('#address1').type('Alameda Xingu, 350 cj 1604')
    cy.get('#city').type('Barueri')
    cy.get('#postcode').type('00000')
    cy.get('#id_state').select('Florida')
    cy.get('#phone_mobile').type('9555542')
    cy.get('#alias').clear() .type('Alameda Araguaia, 818')
    cy.get('#submitAccount > span').click()
  
   });

      it('Adicionar produto no carrinho e Validar ', ()=> {
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
    cy.get('body')
    cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    cy.get('.button-container > .button-medium > span').click()
    cy.wait(3000)
    cy.get('.shopping_cart')
    cy.get('[title="View my shopping cart"] > .ajax_cart_product_txt').click()

    

   })

  

});

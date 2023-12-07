/// <reference types="Cypress" />

describe('', function() {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Swag Labs')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('[id="user-name"]')
          .type('standard_user',{delay:0})
        cy.get('[id="password"]')
          .type('secret_sauce',{delay:0})        
        cy.get('input[type="submit"]')
          .click()
        cy.get('[class=product_label]',{delay:2})
          .should('be.visible','Products')  
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
      cy.get('[id="user-name"]')
      .type('123',{delay:0})
      cy.get('[id="password"]')
      .type('secret_sauce',{delay:0})        
      cy.get('input[type="submit"]')
      .click()
    cy.get('[class=error-button]',{delay:2})
      .should('be.visible',"Username and password do not match any user in this service")  
    })

    it('testar submeter o formulário com command.add', function() {
      cy.fillMandatoryFieldsAndSubmit()
    })
/*
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
      cy.fixture('CTAL.pdf').as('arquivo')
      cy.get('input[type="file"]')
      .selectFile('@arquivo')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('CTAL.pdf')
      })  
    }) 

    it('seleciona um arquivo simulando um drag-and-drop', function() {
      cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/CTAL.pdf'), {action: 'drag-drop'}
      .should(function($input){
        expect($input[0].files[0].name).to.equal('CTAL.pdf')
      })  
    })
    
*/    
})   
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
    it('envia formulário com sucesso usando comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible','Mensagem enviada com sucesso.')  
    })

    it('Selecione um produto Youtube por seu texto', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('#product').select('YouTube').should('have.value','youtube')
        cy.get('.success').should('be.visible','Mensagem enviada com sucesso.') 
    })

    it('Seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('#product').select('mentoria').should('have.value','mentoria')
        cy.get('.success').should('be.visible','Mensagem enviada com sucesso.') 
    })

    it('Seleciona um produto (Blog) por seu índice', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('#product').select(1).should('have.value','blog')
        cy.get('.success').should('be.visible','Mensagem enviada com sucesso.') 
    })

    it('Marca o tipo de atendimento "Feedback"', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('input[type="radio"][value="feedback"').check().should('be.checked')
        cy.get('.success').should('be.visible','Mensagem enviada com sucesso.') 
    })

    
    it('Marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
          }) 
    })

    it('Marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
          .check()
          .last()
          .uncheck()
          .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function () {
      cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/CTAL.pdf')
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

    it('seleciona um arquivo simulando um drag-and-drop', function() {
      cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/CTAL.pdf'), {action: 'drag-drop'}
      .should(function($input){
        expect($input[0].files[0].name).to.equal('CTAL.pdf')
      })  
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
      cy.fixture('CTAL.pdf').as('arquivo')
      cy.get('input[type="file"]')
      .selectFile('@arquivo')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('CTAL.pdf')
      })  
    }) 

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
      cy.get('#privacy a ').should('have.attr','target','_blank')
    })
    
    it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
      cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()

      cy.contains('Talking About Testing').should('be.visible') 
    })
*/    
})   
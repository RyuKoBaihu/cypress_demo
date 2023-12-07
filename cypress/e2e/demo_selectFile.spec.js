/// <reference types="Cypress" />

describe('', function() {
  beforeEach(function() {
      cy.visit('https://www.dia-pen.hr/orbicon/3rdParty/rad-plus/test.html')
  })

  it('verifica o título da aplicação', function() {
      cy.title().should('be.equal','File Upload Test')
  })

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
      
})   
/// <reference types="Cypress" />

describe('', function() {
  beforeEach(function() {
      cy.visit('https://filebin.net/')
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
    cy.fixture('CTAL.pdf').as('arquivo')
    cy.get('input[type="file"]')
    .selectFile('@arquivo',{delay:2})
    })  
}) 


      

Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function() {
    cy.get('[id="user-name"]')
    .type('standard_user',{delay:0})
    cy.get('[id="password"]')
    .type('secret_sauce',{delay:0})        
    cy.get('input[type="submit"]')
    .click()
    cy.get('[class=product_label]',{delay:2})
    .should('be.visible','Products')  
})
/// <reference types='Cypress' />
import 'cypress-iframe'
describe('IFrame HAndling', function(){
//    it('first approach', function(){

  
//     cy.visit('https://the-internet.herokuapp.com/iframe');
//     // let iframe = cy.get('#mce_0_ifr')
//     // .its('0.contentDocument.body').should('be.visible').then(cy.wrap);

//     // iframe.clear().type("Welcome{ctrl+a}")

//     cy.getIframe('#mce_0_ifr').clear().type("WELCOME{ctrl+a}")


//     cy.get("[aria-label='Bold']").click()
// })

it('3rd Approach', function(){
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr').clear().type("WELCOME{ctrl+a}")

    cy.get("[aria-label='Bold']").click()
})
})
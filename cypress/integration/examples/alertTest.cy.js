/// <reference  types='Cypress' />

describe('Alert', function(){
    // it('Alerts test', function(){
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.get("button[onclick='jsAlert()']").click()
    //     cy.on('window:alert', (t)=>{
    //         expect(t).to.equal('I am a JS Alert')
    //     })
    //     cy.get('#result').should('have.text','You successfully clicked an alert')
    // })

    // it('Confirm Alert', function(){
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.get("button[onclick='jsConfirm()']").click()
    //     cy.on('window:confirm', (t)=>{
    //         expect(t).to.contain('I am a JS Confirm')
    //     })
    //     cy.get('#result').should('have.text','You clicked: Ok')
    // })
    // it.skip('Confirm Alert test', function(){
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.get("button[onclick='jsConfirm()']").click()
    //     cy.on('window:confirm', (t)=>{
    //         expect(t).to.contain('I am a JS Confirm')
    //     })
    //     cy.on('window:confirm',()=>false)
    //     cy.get('#result').should('have.text','You clicked: Cancel')
    // })

    // it('prompt alert', function(){
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.window().then( (win)=>{
    //         cy.stub(win,'prompt').returns('Welcome')
    //     })
    //     cy.get("button[onclick='jsPrompt()']").click()
    //     cy.get('#result').should('have.text','You entered: Welcome')
    // })

    // it('Authentication Test', function(){
    //     cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:{
    //         "Username":"admin",
    //         "Password": "admin"
    //         }
    //     });
        
    // })

    it('test', function(){
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('.example > p').should('have.contain',"Congratulations")   })
})
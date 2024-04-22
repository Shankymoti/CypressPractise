/// <reference types='Cypress' />

describe(' Handling Child tab or Window', ()=>{

    // it ('Approach1', function(){
    //     cy.visit('https://the-internet.herokuapp.com/windows')
    //     cy.get('.example > a').invoke('removeAttr', 'target').click();
    //     cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    //     cy.wait(5000)

    //     cy.go('back')
    // })

    it('Approach2', function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then( (e)=>{
            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
    })
})
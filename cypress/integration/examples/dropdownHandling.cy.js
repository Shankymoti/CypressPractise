/// <reference types='Cypress' />

describe('drop down', function(){

    // it('select tag', function(){
    //     cy.visit('https://www.zoho.com/commerce/free-demo.html')
    //     cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
    // })
    // it('without Select Drop', function(){

    //     cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    //     cy.get('#select2-billing_country-container').click()

    //     cy.get('.select2-search__field').type('Italy').type('{enter}')
    // })

    // it('Auto Suggestive dropdown', function(){
    //     cy.visit('https://www.wikipedia.org/')
    //     cy.get('#searchInput').type("Delhi")
    //     cy.get('.suggestion-description').contains("Central university in Delhi, India").click();
    //     cy.url().should('include',"https://en.wikipedia.org/wiki/Delhi_University")
    // })

    it('dyanmic drop down', function(){
        cy.visit('https://www.google.com/')

        cy.get("[aria-label='Search']").type("cypress automation");
        cy.get('div.wM6W7d > span').each( ($el,index, $list)=>{
         if($el.text() == 'cypress automation tutorial'){
            cy.wrap($el).click()
         }
        })
        cy.get("[aria-label='Search']").should('have.value','cypress automation tutorial')
    })
})
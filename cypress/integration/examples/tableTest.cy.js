/// <reference types='Cypress' />

describe('tables', ()=>{
    
    it('count rows and column', function(){
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get("button[type='submit']").click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer > a').click()
        cy.get('#menu-customer > ul > li:first-child').click()
        cy.wait(50000)
          cy.get('.table.table-bordered.table-hover > tbody >tr').should('have.length','10')
         cy.get('.table.table-bordered.table-hover > thead > tr > td').should('have.length','7')
         cy.get("table[class='table table-bordered table-hover'] > tbody > tr:nth-child(7) > td:nth-child(3)").contains("demo234566@gmail.com")
         cy.get("table[class='table table-bordered table-hover'] > tbody > tr").each( ($el,index,$list)=>{
          cy.wrap($el).within( ()=>{
            cy.get('td').each( ($col,index,$cols)=>{
                cy.log($col)
            })
          })
         })

        //  let totalPages;
        //  cy.get('.col-sm-6.text-end').then( (e)=>{
        //     let mytext = e.text()
        //     totalPages = mytext.substring(mytext.indexOf('(')+1,mytext.indexOf('Pages')-1)
        //     cy.log(totalPages)
        //  })

        let totalPages = 5;
        for(let i = 1; i<=totalPages; i++){
            if(totalPages>1){
                cy.get(".col-sm-6.text-start > ul > li:nth-child("+i+")").click()

                cy.get("table[class='table table-bordered table-hover'] >tbody > tr").each( ($row,index,$rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td').each( ($col,index,$cols)=>{
                            cy.log($col.text())
                        })
                    })
                })
            }
        }
    })
})
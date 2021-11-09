/// <reference types = "Cypress"/>

context("ilk test",()=>{
    it("visit",()=>{
        cy.visit(Cypress.config("baseUrl"))
    })
    it("url dogrulama",()=>{
        cy.url().should("include",Cypress.config("baseUrl"))
        cy.get("body > form > div > h1").should("have.text","Dashboard")
        
    })
    it("protocol dogrulama",()=>{
       cy.location("protocol").should("eq","https:")
        
    })
    
})
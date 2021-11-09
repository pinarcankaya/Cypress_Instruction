/// <reference types = "Cypress"/>

context("Cypress Selector",()=>{
    const invalidEmail="assdf.hyt@com"
    const invalidPassword="1234"
    const validEmail="cypress_test_1@gmail.com"
    const validPassword="admin_123"
    
    it("visit_negatif senaryo",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.get("[type='email']").type(invalidEmail)
        cy.get("[type='password']").type(invalidPassword)
        cy.wait(2000)
        cy.get(".btn").click()
        cy.get("#fail").should("include.text","Girdiğiniz bilgiler hatalıdır.")
      
    })
    it("visit_pozitif senaryo",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.get("[type='email']").type(validEmail)
        cy.get("[type='password']").type(validPassword)
        cy.wait(2000)
        cy.get(".btn").click()
       cy.get(".m-0").should("have.text","Dashboard")
       cy.url().should("include","index.php")
    })
})
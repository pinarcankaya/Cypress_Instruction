/// <reference types = "Cypress"/>

context("Login senaryo",()=>{

    const email="cypress_test_1@gmail.com"
    const password="admin_123"

    it("ranorex ile test senaryosu",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.get("[type='email']").type(email)
        cy.get("[type='password']").type(password)
        cy.wait(2000)
        cy.get(".btn").click()
        cy.get(".bg-info.small-box > .inner > h3").should("have.text","150")
        
    })






})
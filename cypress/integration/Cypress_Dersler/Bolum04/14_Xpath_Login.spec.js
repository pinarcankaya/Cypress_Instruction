/// <reference types = "Cypress"/>

context("xpath",()=>{

    const emailInputXpath="//input[@type='email']"
    const passwordInputXpath="//input[@name='password']"
    const submitInputXpath="//input[@type='submit']"

    const email="cypress_test_1@gmail.com"
    const password="admin_123"

    it("xpath ile login",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.xpath(emailInputXpath).type(email)
        cy.xpath(passwordInputXpath).type(password)
        cy.xpath(submitInputXpath).click()
        
  


    })
})
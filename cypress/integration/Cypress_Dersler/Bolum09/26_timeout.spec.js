// <reference types = "Cypress"/>

context("timeout",()=>{

        Cypress.config("defaultCommandTimeout",3000)  
        //!buraya wait koyarsak sadece bu spec dosyasi icinde takildiginda bekler

    const emailInputXpath="//input[@type='email']"
    const passwordInputXpath="//input[@name='password']"
    const submitInputXpath="//input[@type='submit']"

    const email="cypress_test_1@gmail.com"
    const password="admin_123"

    it("default timeout degistirme",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.xpath(emailInputXpath).type(email)
        cy.xpath(passwordInputXpath).type(password)
        cy.xpath(submitInputXpath).click()
        cy.xpath("//h1[.='Dashboard']",{timeout:10000}).should("have.text","Dashboard")
        /// !burada sadece belirten elementten sonra bekler
        ////*butun proje icin gecerli bir wait istersek (implicit wait gibi) cypress.json icine koyabilriiz
  


    })
})
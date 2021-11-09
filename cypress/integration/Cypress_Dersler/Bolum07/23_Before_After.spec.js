/// <reference types = "Cypress"/>

//spec bazli yapi yani sadece bu spec icin calisacak
// //index js ye bu methodlari koyarsak butun spec dosyalarini kapsa onlar icin de ayni islemleri yapar
//  before(()=>{  
// // //? spec dosyasindaki butun testler kosmadan once 1 kez calisir
//  
//  })

   beforeEach(()=>{  // !before Method
// // // ?her bir testten once calisir

       const emailInputXpath="//input[@type='email']"
       const passwordInputXpath="//input[@name='password']"
       const submitInputXpath="//input[@type='submit']"

       const email="cypress_test_1@gmail.com"
       const password="admin_123"

       cy.visit(Cypress.config("baseUrl"))
       cy.xpath(emailInputXpath).type(email)
       cy.xpath(passwordInputXpath).type(password)
       cy.xpath(submitInputXpath).click()
    })

// after(()=>{
// //? spec dosyasindaki butun testler tamamlandiginda sadece 1 kez calisir
// })

// afterEach(()=>{
// // ?her bir testten sonra 1 kez calisir
// })


context("Before_After",()=>{
   
    
    it("1.Widget",()=>{
     
       // cy.get('.bg-info.small-box > .inner > h3').should('have.text','150')
       cy.get('.bg-info.small-box > .inner > h3').should('have.text','150')

    })
    it("1.Widget",()=>{
      
        cy.xpath("(//h3)[5]").should('have.text','53%')

    })
    it("1.Widget",()=>{
      
        cy.xpath("(//h3)[6]").should('have.text','44')

    })

    it("1.Widget",()=>{
       
        cy.xpath("(//h3)[7]").should('have.text','65')

    })
})
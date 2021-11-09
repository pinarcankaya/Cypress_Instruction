/// <reference types = "Cypress"/>

import login from "../../../PageObjectModel/login" //login sayfasini import ettik


context("Pom",()=>{

    const login_=new login()  ///obje olusturuk
  
    it.skip("Login",()=>{
       
        cy.visit("https://test.iyikisordun.com/login.php")

         login_.emailInput().should('be.visible').type("cypress_test_1@gmail.com")
         login_.passwordInput().should('be.visible').type("admin_123")
         login_.submitInput().should('be.visible').click()
        
      
     
      
        // cy.get("input[name='username']").should('be.visible').type("cypress_test_1@gmail.com")
        // cy.get("input[name='password']").should('be.visible').type("admin_123")
        // cy.get("input[name='submit']").should('be.visible').click()
    
    })
})
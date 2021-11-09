// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')  //xpath locate kullanabilmek icin




// before(()=>{
//     //? spec dosyasindaki butun testler kosmadan once 1 kez calisir
  
//     })
    
    //  beforeEach(()=>{
    // // // ?her bir testten once calisir
    
    //  const emailInputXpath="//input[@type='email']"
    //      const passwordInputXpath="//input[@name='password']"
    //      const submitInputXpath="//input[@type='submit']"
    
    //      const email="cypress_test_1@gmail.com"
    //      const password="admin_123"
    
    //      cy.visit(Cypress.config("baseUrl"))
    //  cy.xpath(emailInputXpath).type(email)
    //  cy.xpath(passwordInputXpath).type(password)
    //  cy.xpath(submitInputXpath).click()
    //  })
    
  //   after(()=>{
  //   //? spec dosyasindaki butun testler tamamlandiginda sadece 1 kez calisir
  // //  cy.clear()
  //   })
    
  //   afterEach(()=>{
  //   // ?her bir testten sonra 1 kez calisir
  //   })
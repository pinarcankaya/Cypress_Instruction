/// <reference types = "Cypress"/>


const urls={
    "General":"https://test.iyikisordun.com/pages/UI/general.html",
    "Icons"  :"https://test.iyikisordun.com/pages/UI/icons.html",
    "Buttons":"https://test.iyikisordun.com/pages/UI/buttons.html",
    "Sliders":"https://test.iyikisordun.com/pages/UI/sliders.html",
    "Modals & Alerts" :"https://test.iyikisordun.com/pages/UI/modals.html",
    "Navbar & Tabs":"https://test.iyikisordun.com/pages/UI/navbar.html",
    "Timeline":"https://test.iyikisordun.com/pages/UI/timeline.html",
    "Ribbons":"https://test.iyikisordun.com/pages/UI/ribbons.html"
    
}
context("Each Kullanimi",()=>{
    const emailInputXpath="//input[@type='email']"
    const passwordInputXpath="//input[@name='password']"
    const submitInputXpath="//input[@type='submit']"

    const email="cypress_test_1@gmail.com"
    const password="admin_123"


    it("Href Dogrulama",()=>{
        let buttonName,url
        
        const baseUrl="https://test.iyikisordun.com/"
        cy.visit(baseUrl)
        cy.xpath(emailInputXpath).type(email)
        cy.xpath(passwordInputXpath).type(password)
        cy.xpath(submitInputXpath).click()

       
        cy.xpath("(//a[@class='nav-link active'])[1]").click()
        cy.xpath("(//ul[@class='nav nav-treeview'])[4]/li/a").each((element,index,list)=>{
        //  cy.log("ElementName: " + element.text(), ", index: " + index, " , elemanSayisi: " + list.length)
      
       cy.wrap(element).should("have.attr","href").then((href)=>{
          // cy.log(href)
           //cy.log(element.children('p').text())
           //cy.log(baseUrl + href)
          buttonName=element.children('p').text().trim() //general

           url=urls[buttonName]  //general
           assert.equal(url,(baseUrl + href),"href dogrulama")
      })
      
      
        })
    })
})
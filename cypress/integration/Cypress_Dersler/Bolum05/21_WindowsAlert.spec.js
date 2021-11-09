/// <reference types = "Cypress"/>



context("Alert",()=>{
    const url="https://test.iyikisordun.com/pages/UI/modals.html"
   
    it("Alert uzerindeki teexti dogrulama",()=>{
       cy.visit(url)
       cy.get(".card.card-outline.card-primary > .card-body > button:nth-of-type(1)").click()
      // cy.xpath("(//button[@class='btn btn-default'])[1]").click()

      cy.on("windowAlert",(str)=>{
        expect(str).to.equal("Cypress alert kontrol.")

        //?test yaparken alert acildigini gormuyoruz cunku test akisinin bloklanmamasi icin 
        //?cypress tarafindan visible olmasi engelleniyor
      })
    })
})
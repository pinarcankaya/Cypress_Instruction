/// <reference types = "Cypress"/>


context("tarayici fonksiyonlari",()=>{
    const url1="https://test.iyikisordun.com/index2.html"
    const url2="https://test.iyikisordun.com/index3.html"
    it("geri gelme",()=>{
        cy.visit(url1)
        cy.wait(2000)
        cy.visit(url2)
        //?! alttaki her iki method da  bir onceki sayfaya gotutur
        cy.go("back")    //* cy.go(-1) de kullanilabilir
      
        cy.url().should("include","index2")

    })

    it("ileri gitme",()=>{
      //? cy.go("forward")    de kullanilabilir
      cy.wait(2000)
       cy.go(1)
       cy.url().should("include","index3")
    })

    it("Reload",()=>{  //! sayfayi yeniler
        cy.pause()
        cy.reload()
      })

})
// <reference types = "Cypress"/>

context("Scroll Islemleri ve Trigger",()=>{


    it.skip("Scroll To",()=>{
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
       cy.window().scrollTo("bottom")   ///sayfanin altina iner
       cy.window().scrollTo("center")   ///sayfanin ortasina iner
       cy.window().scrollTo(0,300)  // pixel olarak da ayarlayabiliriz
    })
    it.skip("Data Table Scroll ",()=>{
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
       cy.window().scrollTo("bottom")   
       cy.xpath("(//div[@class='card-body table-responsive p-0'])[2]").scrollTo("bottom")
      
    })
    it("Elemente Scroll ",()=>{
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html")
      cy.get("div:nth-of-type(3) > .col-12 > .card > .card-body.p-0.table-responsive").scrollIntoView()
      // !tek bir elemente yada yukardaki gibi bir table a scroll etmek icin
     // cy.xpath("(//div[@class='card-body table-responsive p-0'])[2]").scrollIntoView()
      //xpatten sonra bazi methodlar otomatii cikmliyor ama yine de calisiyor
    })
})
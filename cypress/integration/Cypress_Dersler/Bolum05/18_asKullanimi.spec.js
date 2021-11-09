/// <reference types = "Cypress"/>

context("as Kullanimi",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it.only("check Box",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.get("[type = 'checkbox']").check("option1",{force:true}).should("be.checked")

        //type ve value deegrleri varsa ayri ayri yazilabilir  // birden fazla secim yapilabilir
    })
    it("as kullanarak check Box",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.get("[type = 'checkbox']").as("X")   //locater'i tekrar yazmamak icin as kullanip isim veriyoruz
        cy.get("@X").check("option1",{force:true})  //istedimiz kadar  ayni ismi kullanarak islem yapabilriz
        cy.get("@X").should("be.checked")

    })
})
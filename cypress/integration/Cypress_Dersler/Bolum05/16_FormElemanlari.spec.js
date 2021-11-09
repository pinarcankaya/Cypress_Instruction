/// <reference types = "Cypress"/>

context("Form Elemanlari",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
    it.skip("Input Box",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.get("#exampleInputEmail1").clear

    })
    it.skip("Input Box Editleme",()=>{
        cy.reload()  //ayni yer yenilensin
        cy.wait(2000)
        cy.get("#exampleInputEmail1").type("yeniemail@g")

    })
    it.skip("Input Box Editleme",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.get("#exampleInputEmail1").should("have.value","ornek_email@test.com")

    })
     it("Radio Button",()=>{
         cy.visit(url)
         cy.wait(2000)
         cy.get("[type=radio]").check("radio_11",{force: true})

     })

//hata denetimini devre disi birakmak icin force=true ///kontrolleri atlar istedgimiz elentten baslar
})
// <reference types = "Cypress"/>

context("Files",()=>{

    it.skip("Read File",()=>{
      cy.readFile("cypress/fixtures/CypressTest.txt").should("eq","Hello")
      //fix dosyamizda bulunan text dosyasindaki hello ya esit mi diye bakiyoruz
       
      
      cy.readFile("cypress/fixtures/CypressTest1.json").its("email").should("eq","cypress_test_1@gmail.com")
         //fix dosyamizda bulunan  json dosyasi uyusuyor mu doye bakiyoruz
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")

         cy.readFile("cypress/fixtures/CypressTest1.json").its("email").then((emailAdress)=>{
        cy.wait(2000)
        cy.ClearAndSendKeys("input#exampleInputEmail1",emailAdress)
        ///alani temizle ve elementi gonder methodu //command.js te
         })
    })
    it.skip("Write File",()=>{
      cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
      cy.get("input#exampleInputEmail1").invoke("val").then((emaiText)=>{
        cy.writeFile("cypress/fixtures/writeFile.json",{email : emaiText})
                                      //json tipinde bir file olustur//json seklinde veri girisi yap
       ///yukardaki komut fixtures altinda bir file olusturup icin esiteden cektigmiz mail'i yazacak                               
      })
    })
      it("Write File txt",()=>{
        cy.visit("https://test.iyikisordun.com/pages/UI/navbar.html")
        cy.get("div#custom-content-above-home").invoke("text").then((text)=>{
          cy.writeFile("cypress/fixtures/ornekText.txt",text.trim())
          //degsiklik vs yapilirsa ustune yazar yeni bir file olsuturmaz
        })
       
      })     

})
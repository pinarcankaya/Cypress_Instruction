/// <reference types = "Cypress"/>


context("Then Yapisi",()=>{
  
     it.skip("wrap kullanimi",()=>{ 
     cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
     cy.get("input#exampleInputEmail1").invoke("val").then((emailAdress)=>{
        cy.log(emailAdress)
//then yapisinin icindeki degiskeni then yapisnin disinda kullnamiyoruz
        cy.wrap(emailAdress).as("newEmail")
        //then yapisin icindeki elemanti isarda da kullanmak icin wrap yapisi ile as methodu ile yeni bir isim veriyoz
     })
   
     cy.get("@newEmail").then((emailAdress)=>{
        cy.log(emailAdress)
     })
    
     cy.visit("https://test.iyikisordun.com/pages/forms/validation.html")
     cy.get("@newEmail").then((emailAdress)=>{
        cy.get("input#exampleInputEmail1").type(emailAdress)
     })
      })
    })


    /*///<reference types ="Cypress"/>


context("Then Yapisi" ,()=>{

    it("Wrap kullanimi" ,()=>{
        cy.visit("http://test.iyikisordun.com/pages/forms/general.html")
        cy.get("input#exampleInputEmail1").invoke("val").then((emailAdress)=>{

            cy.log(emailAdress)
            cy.wrap(emailAdress).as("newEmail")
        })
        cy.get("@newEmail").then((emailAdress)=>{
            cy.log(emailAdress)
        })
        cy.visit("http://test.iyikisordun.com/pages/forms/validation.html")
        cy.pause()
        cy.get("@newEmail").then((emailAdress)=>{
            cy.get("input#exampleInputEmail1").type(emailAdress)
        })

        
    })
})*/
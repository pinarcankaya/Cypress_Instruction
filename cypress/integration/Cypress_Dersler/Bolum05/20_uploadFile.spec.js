/// <reference types = "Cypress"/>



context("Upload",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it("file upload",()=>{
       cy.visit(url)
       cy.get("#exampleInputFile").attachFile("kus.jpg")
    
     
     // cy.UploadImage("#exampleInputFile","kus.jpg","kus")
     
     //command.js ye method yazdik herhangi bir uzantidaki dosyayi takilmadan yukleyebilsin diye 
     //1.parametre element locater//2.parametre yuklenecek dosya relative path,3.parametre uzanti olmadan dosya adi
     
      cy.xpath("(//label[@class='custom-file-label'])[1]").should("have.text","kus.jpg")  ///xpaht


       ///eger yuklenecek dosya 30 mb daha buyukse onu yuklemek icin commands js ye bir method daha yazilacak
    })
})
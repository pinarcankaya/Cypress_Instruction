/// <reference types = "Cypress"/>



context("DropDown",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it.only("select",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.xpath("(//select[@class='custom-select'])[1]").select("option 2").should("have.value","option 2")
        //select class mantigi select method olrak belirtilmeli //icine sececgimiz value girilmeli
    })
    
    it("multi select",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.xpath("//select[@class='custom-select']").select(["option 1","option 2","option 3"]).//birden fazla secim icin+
        invoke("val").should("deep.equal",["option 1","option 2","option 3"])
        //deep.equal==>birden fazla datayi dogrularken !
        
        ///invoke ggoogle aciklama
        //. invoke(), çalıştırmadan önce fonksiyonun konu üzerinde var olmasını bekleyecektir.
         //. invoke(), çağrılan işlev bir söz verirse, sözün çözülmesini bekleyecektir.
         //.invoke(), tüm zincirleme iddialar geçene kadar otomatik olarak yeniden dener.
    })
})
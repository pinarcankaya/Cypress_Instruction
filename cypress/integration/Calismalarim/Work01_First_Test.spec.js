


describe('My First Test', () =>{
    // describe ('fonksiyonun ismi', 'test icin olusturulacak diger fonksiyon')
    
        it('Url Test', ()=>{
        //test'i tanimliyoruz. @Test anataion gibi
        //it('testin ismi', 'olusturulacak fonksiyon')
    
        //URL adresinde google va rmi?
        cy.visit('https://www.google.com/')
    
        cy.url().should('include', 'google')
        //url() url testi ici kullanilir.
        //should('iceriyormu', 'xxxxxx')
        })

          //2. test olusturma
    it('Title Test', ()=>{

        //Title da Google var mi?
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')
    })
})
/// <reference types = "Cypress"/>


context('4 Islem',() =>{
    const s1=9
    const s2=6
    let sonuc
    it('Toplama' , ()=>{
         sonuc=s1+s2
        assert.equal(sonuc , 15 , 'Toplama sonucu')
    })
    it.only('Cikarma' , ()=>{  
        //! only sadece bunu calistir
            sonuc=s1-s2
        assert.isTrue(sonuc===0 , 'Cikarma sonucu')
    })
    it.skip('Text Kontrol' , ()=>{ 
         //? skip bu testi atlar
         const text1="Cypress io"
        expect(text1).to.have.string("io")
    })
   
}) 


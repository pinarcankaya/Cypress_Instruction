/// <reference types = "Cypress"/>

class helper{

    static GetTextFunction(elementPath){
        cy.get(elementPath).invoke('text').then((text)=>{

            return text
        })
    }

    static async GetTextFunction(elementPath){   ///asenkron bir method olmasi icin async ekledik//ustteki tek basina farkli senkronizeler yapiyor
        let promise=new Promise((res,rej)=>{
            cy.get(elementPath).invoke('text').then((text)=>{

                res(text.trim())
            })
        });
        let result=await Promise;
        return result 
    }

}
export default helper
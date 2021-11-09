

describe('Crystal Key Hotel', ()=>{

    it('Test 1', ()=> {

    cy.visit('https://qa-environment.koalaresorthotels.com/')

    //seleniumdaki get()
    cy.get('#navLogon > .nav-link').click    //logine tikla

    //! 2.yol
    cy.contains('Log in').click()

     //!contains() metni text olarak buluyor
    //?userername: 'manager'
    
    cy.get('#UserName').type('Manager')
    cy.get('#Password').type('Manager1!')
    cy.wait(2000)
    cy.get('input[type=submit]').click
    
    })
})
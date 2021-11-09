

class login{

    emailInput(){
        return cy.get("input[name='username']")
    }
    passwordInput(){
        return cy.get("input[name='password']")
    }
    submitInput(){
        return cy.get("input[name='submit']")
    }
}
export default login
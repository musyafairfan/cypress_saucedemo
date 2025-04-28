const errorData = require('../../fixtures/errorData.json')

class loginPage {
    username = '#user-name';
    password = '#password';
    btnLogin = '#login-button';
    atributLoginPage = '.login_credentials_wrap-inner';
    errLogin = '.error-message-container.error';

    visit() {
        cy.visit('');
    }
    
    inputUsername(username) {
        cy.get(this.username).type(username)
    }
    
    inputPassword(password) {
        cy.get(this.password).type(password)
    }
    
    buttonLogin() {
        cy.get(this.btnLogin).click()
    }

    verifyLoginPage() {
        cy.get(this.atributLoginPage).should('be.visible')
    }

    verifyErrLogin_invalidUsername() {
        cy.get(this.errLogin).should('be.visible')
        cy.get(this.errLogin).should('have.text', errorData.error1.invalidCredential)
    }
    verifyErrLogin_invalidPwd() {
        cy.get(this.errLogin).should('be.visible')
        cy.get(this.errLogin).should('have.text', errorData.error1.invalidCredential)
    }

    verifyErrLogin_lockedOutUser() {
        cy.get(this.errLogin).should('be.visible')
        cy.get(this.errLogin).should('have.text', errorData.error2.lockedOutUser)
    }
}

export default new loginPage();
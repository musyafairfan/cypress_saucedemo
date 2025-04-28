import loginPage from '../support/pageObjects/loginPage';
const userData = require('../fixtures/userData.json');

describe('Login Saucedemo', () => {
  it('Login using Standard User', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.standardUser.username);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
  });
  it('Login using Invalid Username', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.invalidUsername);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
    loginPage.verifyErrLogin_invalidUsername();
  });
  it('Login using Invalid Password', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.standardUser.username);
    loginPage.inputPassword(userData.invalidPassword);
    loginPage.buttonLogin();
    loginPage.verifyErrLogin_invalidPwd();
  });
  it('Login using Locked Out User', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.lockedOutUser.username);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
    loginPage.verifyErrLogin_lockedOutUser();
  });
  it('Login using Problem User', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.problemUser.username);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
  });
  it('Login using Performance Glitch User', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.performanceGlitchUser.username);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
  });
  it('Login using Error User', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.errorUser.username);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
  });
  it('Login using Visual User', () => {
    loginPage.visit();
    loginPage.verifyLoginPage();
    loginPage.inputUsername(userData.visualUser.username);
    loginPage.inputPassword(userData.validPassword);
    loginPage.buttonLogin();
  });
})
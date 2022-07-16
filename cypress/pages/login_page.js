export class LoginPage {
  visit() {
    cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php');
  }

  login(username="", password="") {
    cy.get('input[name="username"]')
      .then(e => { if (username !== '') cy.wrap(e).type(username) });
    cy.get('input[name="password"]')
      .then(e => { if (password !== '') cy.wrap(e).type(password) });
    cy.get('input[type="submit"]').click();
    return this;
  }

  verifyErrorMessage(message) {
    cy.get('.help-block').should('contain', message);
    return this;
  }

  verifyLoginPageElements() {
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[type="submit"]').should('be.visible');
    return this;
  }
}
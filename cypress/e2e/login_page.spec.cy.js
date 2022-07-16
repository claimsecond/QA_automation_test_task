/// <reference types="cypress" />

import { LoginPage } from "../pages/login_page";
const loginPage = new LoginPage();

describe("Login Page", () => { 
  beforeEach(() => {
    loginPage.visit();
  });

  it("should verify that all the elements are presented on the page", () => {
    loginPage.verifyLoginPageElements();
  }
  );

  it("should verify that the error message is displayed when the user enters invalid credentials", () => { 
    cy.fixture("/login_data.json").then((user) => {
      loginPage.login(user.username, user.password);
    });
    loginPage.verifyErrorMessage("No account found with that username.");
  });

  it("should verify that the error message is displayed when the user enters login only", () => {
    cy.fixture("/login_data.json").then((user) => {
      loginPage.login(user.username, "");
    });
    loginPage.verifyErrorMessage("Please enter your password.");
  });

  it("should fail because of unsuccessfull login", () => {
    cy.fixture("/login_data.json").then((user) => {
      loginPage.login(user.username, user.password);
      cy.get('body').should('contain.text', 'Login successfull!');
    });
  });
});
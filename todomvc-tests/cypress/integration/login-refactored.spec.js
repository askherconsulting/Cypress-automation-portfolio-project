/// <reference types="Cypress" />
/*jshint esversion: 8 */

describe('Login feature', () => {
    beforeEach(() => {
      cy.visit('https://automationintesting.online/#/admin');
      cy.fixture('login-details').as('data');
    });
  
    it('should login successfully if credentials are valid', function () {
      const { username, password } = this.data.validCredentials;
      cy.login(username, password);
  
      cy.get('#frontPageLink').should('be.visible');
    });
  
    it('should not login successfully if credentials are incorrect', function () {
      const { username, password } = this.data.invalidCredentials;
      cy.login(username, password);
  
      cy.get('#frontPageLink').should('not.be.visible');
    });
  });
  
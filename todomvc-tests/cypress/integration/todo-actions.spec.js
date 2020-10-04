/// <reference types="cypress" />
/*jshint esversion: 8 */

describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');

        cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}");

    });

    it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', 'Clean room');

    cy.get('toggle').should('not.be.checked');

});

it('should mark a todo as completed', () => {
    cy.get('.toggle').click();

    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
    
});

it('should clear completed todos', () => {
    cy.get('.toggle').click();
    cy.contains('Clear').focus();

    cy.contains('Clear').click();

    cy.get('.todo-list').should('not.have.descendants', 'li');
    
});

});
/// <reference types="cypress" />
/*jshint esversion: 8 */

describe('todo actions', function () {
      // set up these constants to match what TodoMVC does
    let TODO_ITEM_ONE = 'buy some cheese';
    let TODO_ITEM_TWO = 'feed the cat';
    let TODO_ITEM_THREE = 'book a doctors appointment'; 
    
    beforeEach(function () {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
        cy.get('.new-todo').type('have a bath').type('{enter}');
    });

    context('New Todo', function () {
        it('should allow me to add more todo items', function () {
          cy.get('.new-todo').type(TODO_ITEM_ONE).type('{enter}');
          cy.get('.todo-list li').eq(0).find('label').should('contain', TODO_ITEM_ONE);
          cy.get('.new-todo').type(TODO_ITEM_TWO).type('{enter}');
          cy.get('.todo-list li').eq(0).find('label').should('contain', TODO_ITEM_TWO);
          cy.get('.new-todo').type(TODO_ITEM_THREE).type('{enter}');
          cy.get('.todo-list li').eq(0).find('label').should('contain', TODO_ITEM_THREE);
        });


        it('should not toggle the checkbox', function () {
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
});
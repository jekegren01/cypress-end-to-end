describe('form test', () => {
    it('test that the form is working', () => {
        cy.visit('/')

        cy.get('[for="name"] > input')
        .type('Ben Schinn')
        .should('have.value', 'Ben Schinn')
        
        const email = 'ben.schinn@lambaschool.com';
        cy.get('[for="email"] > input')
        .type(email)
        .should('have.value', email)
        
        const motivation = 'I want to help others in the community';
        cy.get('textarea#motivation')
        .type(motivation)
        .should('have.value', motivation)

        cy.get('select#positions')
        .select('Yard Work')
        .should('have.value', 'Yard Work')

        cy.get('[data-cy="terms"]')
        .click()
        .should('have.checked', true)

        cy.get('button#submit')
        .should('not.be.disabled')
    })
        
    it('error messages are displayed properly', () => {
        cy.get('[for="email] > input')
        .type('bla bla bla')
        .should('have.value', email)

        cy.get('[data-cy="email-error-msg')
    })
})
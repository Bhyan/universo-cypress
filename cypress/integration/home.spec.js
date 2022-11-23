
it('Deve exibir a home', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/')

    cy.title()
        .should('eq', 'Training Wheels | QAninja')

    cy.get('ul[class=menu-list]')
        .should('be.visible')
})
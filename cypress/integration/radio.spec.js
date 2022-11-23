it('Deve marcar Thor: Ragnarok', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')

    cy.get('input[value=thor3]')
        .click()
        .should('be.checked')
})
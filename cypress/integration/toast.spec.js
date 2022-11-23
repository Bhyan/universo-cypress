it('Deve exibir uma notificação toast', () => {
    cy.visit('/toaster')

    cy.contains('button', 'Toast Rápido').click()

    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')
})
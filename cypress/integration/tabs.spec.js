it('Nova guia', () => {
    cy.visit('/new_tab')

    cy.get('a[href="https://www.google.com.br]').should('have.attr', 'target', '_blank')

    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target')
    cy.contains('a', 'Clique aqui').click()
})
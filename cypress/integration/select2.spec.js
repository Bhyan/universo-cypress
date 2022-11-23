it('Deve selecionar apenas um item', () => {
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()
})

it('Deve selecionar multiplas opções', () => {
    cy.visit('/apps/select2/index.html')

    const frameworks = [
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    frameworks.forEach((framework) => {
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()
    })
})
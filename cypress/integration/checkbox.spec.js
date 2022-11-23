it('Deve marcar os filmes da marvel', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes')

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach((movie) => {
        cy.get(`input[name=${movie}]`)
            .click()
            .should('be.checked')
    })
})
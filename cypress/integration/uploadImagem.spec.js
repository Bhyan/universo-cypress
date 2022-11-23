it('Deve fazer o upload da minha foto', () => {
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/img.png'

    cy.get('input[name=file]').selectFile(imageFile, { force: true })

    cy.get('input[value=Upload]').click()

    cy.get('img[src^="/uploads/"]', { timeout: 7000 })
        .should('be.visible')
})
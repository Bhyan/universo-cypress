const niceIFrame = function () {
    return cy.get('#weareqaninja')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}

const badIFrame = function () {
    return cy.get('iframe[src*=instagram]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}

it('Deve validar o total de seguidores', () => {
    cy.visit('/nice_iframe')

    niceIFrame()
        .contains('.FollowerCountText', '6,255 followers')
        .should('be.visible')
})

it('Deve validar o total de seguidores', () => {
    cy.visit('/bad_iframe')

    badIFrame()
        .contains('.FollowerCountText', '6,255 followers')
        .should('be.visible')
})
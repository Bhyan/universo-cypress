
describe('Suite de testes', function () {

    before(function () {
        cy.log('Aqui roda antes de todos')
    })

    beforeEach(function () {
        cy.log('Aqui roda antes de cada')
    })

    it('teste 1', function () {
        cy.log('teste 1')
    })

    it('teste 2', function () {
        cy.log('teste 1')
    })

    it('teste 3', function () {
        cy.log('teste 1')
    })

    afterEach(function () {
        cy.log('Aqui roda depois de cada')
    })

    after(function () {
        cy.log('Aqui roda depois de todos')
    })
})
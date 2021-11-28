describe('Full test of the English Stone Harbor demo', () => {
    it('Checks that Stone Harbor English works', () => {
        cy.visit('/stone-harbor')
        cy.get('a').contains('clothes').click()
        cy.get('a').contains('ring').click()
        cy.get('a').contains('Nancy?').click()
        cy.get('a').contains('Nadine?').click()
        cy.get('a').contains('appearance').click()
        cy.get('a').contains('sunburn').click()
        cy.contains('pick up some cues')
        cy.contains('time outdoors')
        cy.contains('His ring also')
        cy.get('a').contains('card').click()
        cy.contains('which you flip over')
        cy.get('a').contains('glove').click()
        cy.get('a').contains('glove').click()
        cy.contains('and everything changes')
        cy.get('img').should('have.attr', 'alt').and('contains', 'small, cluttered')
        cy.get('a').contains('knickknacks').click()
        cy.get('a').contains('photograph').click()
        cy.contains('personal effects')
        cy.contains('You examine the picture')
        cy.get('a').contains('angry glove').click()
        cy.contains('Healey was murdered')
    })
})
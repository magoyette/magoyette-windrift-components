describe('Full test of the custom components', () => {
    it('Runs through the manual application', () => {
        // Initial page
        cy.visit('/custom-components')
        cy.contains('Custom Components').should('exist')
    })
})

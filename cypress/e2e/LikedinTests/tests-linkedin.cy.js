describe("Site linkedin.com",()=>{

    //Login
    it("I can login", () => {
        cy.visit("https://linkedin.com")
        cy.get(".nav__button-secondary").click();
        cy.get("#username").type("your user name")
        cy.get("#password").type("your password")
        cy.get(".btn__primary--large").click();
        cy.get(':nth-child(1) > .app-aware-link > .t-12').should("exist");

    })

    it("I can logout", () => {
        cy.visit("https://linkedin.com")
        cy.get(".nav__button-secondary").click();
        cy.get("#username").type("your user name")
        cy.get("#password").type("your password")
        cy.get(".btn__primary--large").click();
        cy.get(':nth-child(1) > .app-aware-link > .t-12').should("exist");

        cy.get('#ember13 > .global-nav__primary-link-text').click()
        cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click()
        cy.get('#ember272 > .artdeco-button__text').click();
        cy.get('.nav__button-secondary').should("exist");

    })
})
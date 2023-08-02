describe("Site Google.com",()=>{

    //Basic search
    it("Working with basic search", () => {
        cy.visit("https://google.com")
        cy.get("#L2AGLb").click();
        cy.get(".gLFyf").type("vlog de it").type("{enter}");

        cy.get("#result-stats").should("exist");
    })
})
describe("Exemple where",()=>{

    //url check
    it("I check if a url contains something", () => {
        cy.visit("https://www.digi24.ro/stiri/economie/atacurile-rusilor-la-dunare-schimba-cifrele-la-bursa-de-cereale-cotatiile-la-grau-si-porumb-au-crescut-2449501")

        cy.url().should("include","/stiri/")
        
    })
    
    //delay test

    it("Delay test 10 seconds", () => {
        cy.visit("https://www.google.com")

        cy.get("#L2AGLb").click()
        cy.wait(10000) //10 seconds
        cy.get(".gLFyf").type("10 seconds have passed")
    })

    //selector test with atribute type
    it("Select using an attribute", () => {
        cy.visit("https://www.google.com")
        cy.get("#L2AGLb").click()
        cy.get("#v").click()
        cy.get('[alt="Google"]').should("be.visible"); //Selector atribute alt + assertion
        
    })

    //screenshot test

    it("Make Screenshot", () => {
        cy.visit("https://www.google.com")
        cy.screenshot();
        
    })

    //constant test and verification of input content
    it("Verification of input content", () => {
        cy.visit("https://www.google.com")
        
        cy.get("#L2AGLb").click()
        const googleSearch = cy.get(".gLFyf");

        googleSearch.type("123");
        googleSearch.should("have.value","123");
    })

    //test where i check if a class exist on a selected element
    it("Class exist", () => {
        cy.visit("https://www.libris.ro")
        
        cy.get("#autoCompleteButton").should("have.class","onSearchClick");
        
    })
})
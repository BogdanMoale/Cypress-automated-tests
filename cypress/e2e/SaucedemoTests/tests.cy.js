describe("Tests for https://www.saucedemo.com/", () => {
    
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Login with wrong user or password", () => {
    cy.get("#user-name").type("wrong_usser");
    cy.get("#password").type("wrong_pass");
    cy.get("#login-button").click();
    cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible");
  });

  it("Login with the standard user", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });

  it("Logout", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".bm-burger-button").click();
    cy.contains("Logout").click();
    cy.get(".login_credentials").should("exist");
  });

  it("Open and close side menu", () => {
    cy.get(".bm-burger-button").click();
    cy.get(".bm-menu-wrap").should("be.visible");
    cy.get(".bm-cross-button").click();
    cy.get(".bm-menu-wrap").should("not.exist");
  });

  it("Add product to cart", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").first().click();
    cy.get(".inventory_details_name").should("be.visible");
    cy.get(".btn_primary.btn_inventory").click();
    cy.contains("1").should("be.visible");
  });

  it("Delete product from cart", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").first().click();
    cy.get(".btn_primary.btn_inventory").click();
    cy.contains("1").should("be.visible");
    cy.get(".shopping_cart_badge").click();
    cy.get(".cart_item").first().find(".cart_button").click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("Placing the order", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").first().click();
    cy.get(".btn_primary.btn_inventory").click();
    cy.contains("1").should("be.visible");
    cy.get(".shopping_cart_badge").click();
    cy.get(".checkout_button").click();
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");
    cy.get(".cart_button").click();
    cy.contains("THANK YOU FOR YOUR ORDER").should("be.visible");
  });

  it("Accessing a product's details page", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").first().click();
    cy.get(".inventory_details_name").should("be.visible");
    cy.url().should("include", "/inventory-item.html");
  });

  it("Back to products button", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").first().click();
    cy.get(".inventory_details_name").should("be.visible");
    cy.get(".inventory_details_back_button").click();
    cy.url().should("include", "/inventory.html");
  });
});

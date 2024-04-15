describe("Login Feature", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("/signin");
  });

  it("Logs in with valid credentials", () => {
    // Fill in the email and password fields
    cy.get("#email").type("test@example.com");
    cy.get("#password").type("password123");

    // Submit the form
    cy.get("form").submit();

    // Assert that the user is redirected to the home page after login
    cy.url().should("eq", "http://localhost:5173/"); // Update URL as per your setup

    // Assert that the username or user's presence is displayed in the UI
    cy.get(".username").should("contain.text", "Welcome, Test User"); // Update selector as per your setup
  });

  it("Displays error message with invalid credentials", () => {
    // Fill in invalid email and password
    cy.get("#email").type("invalid@example.com");
    cy.get("#password").type("invalidpassword");

    // Submit the form
    cy.get("form").submit();

    // Assert that an error message is displayed
    cy.get(".error-message")
      .should("be.visible")
      .and("contain.text", "Forkert adgangskode eller email");
  });
});

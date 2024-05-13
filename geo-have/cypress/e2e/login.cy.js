// Describe the test suite
describe("Firebase Login", () => {
  // Define a single test
  it("Logs in to Firebase", () => {
    // Visit the login page
    cy.visit("http://localhost:5173/signin");

    // Type 'hejmeddig@hej.dk' into the email input field
    cy.get('input[type="email"]').type("hejmeddig@hej.dk");
    // Type 'hejmeddig' into the password input field
    cy.get('input[type="password"]').type("hejmeddig");

    // Click the submit button to submit the form
    cy.get('button[type="submit"]').click();

    // Check if the URL includes '/skattejagt' which indicates successful login
    cy.url().should("include", "/skattejagt");
  });
});

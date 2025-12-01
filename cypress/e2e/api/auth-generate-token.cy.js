/// <reference types='cypress'/>

describe("Account API — Generate Token", () => {
  it("should generate a token for the created user", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/GenerateToken",
      body: {
        userName: Cypress.env("username"),
        password: Cypress.env("password"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.be.a("string");
      expect(response.body.status).to.eq("Success");

      Cypress.env("token", response.body.token);
    });
  });
});

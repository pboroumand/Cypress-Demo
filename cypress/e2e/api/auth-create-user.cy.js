/// <reference types='cypress'/>

describe("Account API — Create User", () => {
  const username = `user_${Date.now()}`;
  const password = "Passw0rd!123";

  it("should create a new user successfully", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/User",
      body: {
        userName: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userID");
      expect(response.body.username).to.eq(username);

      // for later tests:
      Cypress.env("userID", response.body.userID);
      Cypress.env("username", username);
      Cypress.env("password", password);
    });
  });
});

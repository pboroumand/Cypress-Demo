/// <reference types='cypress'/>

describe("Account API — Update User with PUT Method", () => {

  const username = `user_${Date.now()}`;
  const oldPassword = "Passw0rd!123";
  const newPassword = "NewPassw0rd!456";

  before(() => {
    // Create user
    cy.request("POST", "/Account/v1/User", {
      userName: username,
      password: oldPassword
    }).then((res) => {
      Cypress.env("userID", res.body.userID);
    });

    // Generate token
    cy.request("POST", "/Account/v1/GenerateToken", {
      userName: username,
      password: oldPassword,
    }).then((res) => {
      Cypress.env("token", res.body.token);
    });
  });

  it("should update the user's password using PUT method", () => {
    cy.request({
      method: "PUT",
      url: `/Account/v1/User/${Cypress.env("userID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`
      },
      body: {
        userName: username,
        password: newPassword
      },
      failOnStatusCode: false  // DemoQA website sometimes returns 200 or 204
    }).then((response) => {
      expect([200, 204]).to.include(response.status);
    });
  });

});

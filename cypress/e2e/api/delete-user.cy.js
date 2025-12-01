/// <reference types='cypress'/>

describe("Account API — Delete User", () => {
  it("should delete the created user", () => {
    cy.request({
      method: "DELETE",
      url: `/Account/v1/User/${Cypress.env("userID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.contain("User deleted successfully");
    });
  });
});

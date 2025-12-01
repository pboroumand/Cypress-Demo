/// <reference types='cypress'/>

describe("Account API — Negative auth tests", () => {
  it("should fail login with wrong password", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/GenerateToken",
      body: {
        userName: "doesNotExist123",
        password: "WrongPass!11",
      },
      failOnStatusCode: false,
    }).then((r) => {
      expect(r.status).to.eq(400);
      expect(r.body.message).to.contain("User not found");
    });
  });

  it("should return error with missing fields", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/GenerateToken",
      body: {},
      failOnStatusCode: false,
    }).then((r) => {
      expect(r.status).to.be.oneOf([400, 422]);
    });
  });
});
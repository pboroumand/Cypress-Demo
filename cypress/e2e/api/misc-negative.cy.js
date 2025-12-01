/// <reference types='cypress'/>

describe("Misc API Negative Tests", () => {
  it("should return 404 for unknown route", () => {
    cy.request({
      method: "GET",
      url: "/unknown/endpoint",
      failOnStatusCode: false,
    }).then((r) => {
      expect(r.status).to.eq(404);
    });
  });

  it("should prevent unauthorized user deletion", () => {
    cy.request({
      method: "DELETE",
      url: `/Account/v1/User/${Cypress.env("userID")}`,
      failOnStatusCode: false,
    }).then((r) => {
      expect(r.status).to.eq(401);
    });
  });
});
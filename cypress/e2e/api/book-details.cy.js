/// <reference types='cypress'/>

describe("Book Store API — GET book by ISBN", () => {
  const validISBN = "9781449325862";

  it("should return correct book details", () => {
    cy.request({
      method: "GET",
      url: "/BookStore/v1/Book",
      qs: { ISBN: validISBN },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.isbn).to.eq(validISBN);
    });
  });

  it("should return error when ISBN is invalid", () => {
    cy.request({
      method: "GET",
      url: "/BookStore/v1/Book",
      qs: { ISBN: "invalid-123" },
      failOnStatusCode: false,
    }).then((r) => {
      expect([400, 404]).to.include(r.status);
    });
  });
});
/// <reference types='cypress'/>

describe("Book Store API — GET all books", () => {
  it("should return a list of books", () => {
    cy.request("GET", "/BookStore/v1/Books")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("books");
        expect(response.body.books).to.be.an("array");
        expect(response.body.books.length).to.be.greaterThan(0);
      });
  });
});
# Cypress-Demo

This project contains a complete **API automation test suite** written in **Cypress 15**, using the public endpoints from **DemoQA**’s Swagger API.  
It demonstrates clean structure, API testing best practices, negative testing, authentication handling, and reusable environment variables.


## Project Overview

The test suite covers:

- **Book Store API**
  - Get all books
  - Get a book by ISBN
  - Negative cases for invalid ISBN

- **Account API**
  - Create user
  - Generate auth token
  - Delete user (authorized)
  - Authentication negative tests (invalid credentials, missing fields)

- **General Negative Tests**
  - Unknown endpoints
  - Unauthorized requests
  
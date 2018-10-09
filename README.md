# Quoter

## Description

Quoter is a tool designed to let freelancers and companies quote more efficiently. Users can list products and/or services to easily create personalized quotes in .pdf and online through a unique link using quoter's url.

## User Stories

- **404:** The user sees a 404 page when reaching a page that does not exist.
- **Signup:**The user can create a free account to the app.
- **Login:** The user can login to the app to create products, services and quotes.
- **Logout:**  can logout from the platform so no one else can use it
- **Create user profile:**  The user can fill its profile information.
- **Add products and services:** The user can add products and services that will later be added to quotes.
- **List products and services:** The user can see a list of products and services added to edit or delete.
- **Create a quote:** The user can create quotes through a form for the basic info and then choose from the list of products and services created before.
- **List quotes:** The user can see a list of quotes created before and edit or delete.
- **Download quote in .pdf format:** The user can download quotes created in .pdf format.
- **Share the quote online:** The user can share the quote through a personalized link.
- **Copy quote's url:** The user can copy the url of the quote's landing page.

## Backlog

Homepage:

- ...

User profile:

- Create user and company profile
- See user and company profile
- Upload company logo

Products and services:

- 

Quotes:

- 

# Client

## Routes

- `/`
  - HomePageComponent
  - public
  - just promotional copy
- `/auth/signup`
  - SignupPageComponent
  - anon only
  - signup form, link to login
  - navigate to homepage after signup
- `/auth/login`
  - LoginPageComponent
  - anon only
  - login form, link to signup
  - navigate to dashboard after login
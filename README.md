# Quoter

## Description

Quoter is a tool designed to let freelancers and companies quote more efficiently. Users can list products and/or services to easily create personalized quotes in .pdf and online through a unique link using quoter's url.

## User Stories

- **404:** The user sees a 404 page when reaching a page that does not exist.
- **Signup:** The user can create a free account to the app.
- **Login:** The user can login to the app to create products, services and quotes.
- **Logout:**  The user can logout from the platform.
- **Create user and company profile:**  The user can fill user and company's profile.
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
  - app description
- `/auth/signup`
  - SignupPageComponent
  - public
  - signup form, link to login
  - navigate to homepage after signup
- `/auth/login`
  - LoginPageComponent
  - public
  - login form, link to signup
  - navigate to dashboard after login
- `/products`
  - ProductsListPageComponent
  - authorized users
  - shows all products, link to create new product.
- `/products/create`
  - ProductsCreatePageComponent
  - authorized users
  - creates a new service
  - navigates to service detail page after creation
- `/services` 
  - ServicesListPageComponent
  - authorized users
  - shows all services, link to create new service.
- `/services/create` 
  - ServicesCreatePageComponent
  - authorized users
  - creates a new service
  - navigates to service detail page after creation
- `/quotes` 
  - QuoteListPageComponent
  - authorized users
  - shows all quotes, links to details, link to create new quote
  - search quotes by filters
- `/quotes/create`
  - QuoteCreatePageComponent
  - authorized users
  - creates a new quote
  - navigates to quote detail page after creation
- `/quotes/:id`
  - QuoteDetailPageComponent
  - authorized users
  - quote details
  - download and copy link url
- `/quotes/:user_id/:id`
  - QuotePageComponent
  - public
- `/profile` 
  - ProfilePageComponent
  - authorized users
  - user and company details
- `**`
  - NotFoundPageComponent
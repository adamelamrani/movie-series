# Coding Challenge

This project has been created using the following technologies:

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - TypeScript extends JavaScript by adding types
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Testing Library](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices
- [Vitest](https://vitest.dev/guide/) - A test runner for Vite
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) - Declarative routing for React

## Getting Started

First, install dependencies and run the development server:

```bash
yarn && yarn dev
```

## Running Tests

```bash
yarn test
```

## ESLint

```bash
yarn lint
```

## TypeScript

```bash
yarn watch-ts
```

## Folder Structure

```
.
├── public
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── card
│   │   ├── carousel
│   │   ├── header
│   │   ├── list
│   │   ├── nav
│   │   ├── scroll
│   │   ├── suggestion
│   ├── layouts
│   ├── pages
│   │   ├── details
│   │   ├── error
│   │   ├── movieDetails
│   │   ├── movies
│   │   ├── serieDetails
│   │   ├── series
│   ├── redux
│   │   ├── api
│   │   ├── reducers
│   │   ├── store
│   ├── types

```

## Deployment

The project is deployed on [Vercel](https://movie-series-orcin.vercel.app/).

## Next steps

- Add more tests
  - Integration tests for the components with requests
  - Unit tests for all the components
- Add more features
  - Show a list of similar movies/series depending on your preferences
  - Add more information for movies and series
  - Add filters in each section
    - such as: genre, year, rating, etc.
- Save the global state in the local storage
- Add a loading template to always have a page structure, even if the data is not loaded yet

# Employees status mgmt system
## Live Demo
Already deployed at [dzch314.online](https://dzch314.online/)

You can try it using the following credentials:
```
login: admin
password: 1234
```
```
login: user
password: 1234
```
----
## Running the Project Locally
### Requirements
- Node.JS `v22.18.0`
- npm `v8.5.1`

Install dependencies

`npm install`

Run both frontend and backend (json-server):

`npm run start` 

Run only the frontend:

`npm run start:dev:ui`

----
## Available Scripts

- `npm run start:dev:ui` - Run the frontend on Webpack Dev Server
- `npm run start:dev:server` - Run the backend on json-server
- `npm run start` - Run both frontend and backend
- `npm run build:prod` - Build the app in production mode
- `npm run build:dev` - Build the app in development mode
- `npm run lint:ts` - Lint TypeScript files
- `npm run lint:ts:fix` - Fix lint errors in TypeScript files
- `npm run lint:scss` - Lint SCSS files
- `npm run lint:scss:fix` - Fix lint errors in SCSS files
- `npm run test:unit` - Run Jest and React Testing Library tests
- `npm run prepare` - Run pre-commit hooks
- `npm run storybook` - Start Storybook
- `npm run storybook:build` - Build Storybook

----
## Architecture
This project follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architecture

## Pages 
- [LoginPage](/src/pages/LoginPage)
- [MainPage](/src/pages/MainPage)
- [NotFoundPage](/src/pages/NotFoundPage)

## Widgets
- [Navbar](/src/widgets/Navbar)
- [EmployeeCreator](/src/widgets/EmployeeCreator)
- [EmployeesList](/src/widgets/EmployeesList)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)

## Features
- [AuthByUsername](/src/features/AuthByUsername)
- [ChangeEmployeeStatus](/src/features/ChangeEmployeeStatus)
- [CreateEmployee](/src/features/CreateEmployee)
- [FilterEmployees](/src/features/FilterEmployees)

## Entities
- [Employee](/src/entities/Employee)
- [Status](/src/entities/Status)
- [User](/src/entities/User)

----
## Tests
There are two types of tests for the `Shared` layer:

1) Unit tests for functions (Jest) - `npm run test:unit`
2) Component tests (React Testing Library) -`npm run test:unit`

----
## Storybook

Storybook is available for UI components in the `Shared` layer.

To start Storybook:
- `npm run storybook`

----
`State management: Redux Toolkit`

`API requests: RTK Query`

----

## CI pipeline & Pre-Commit Hooks

The GitHub Actions configuration is located in the `.github` folder.

The current CI pipeline includes:
- Building the app and Storybook
- Linting
- Running tests

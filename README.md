[![Typing SVG](https://readme-typing-svg.demolab.com?font=Roboto&weight=600&size=32&duration=3000&pause=1000&color=38ADF3&background=FFFFFF00&vCenter=true&repeat=false&width=500&height=48&lines=Employees+status+mgmt+system)](https://git.io/typing-svg)

(This repository provides an implementation of a small technical assignment. For more information, check the [Terms of Reference](ToR.pdf))
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
### Additional:
[Storybook](https://employees-ui.netlify.app/) - UI components documentation

[Unit Tests Report](https://employees-test-report.netlify.app/) - test results

----
## Running the Project Locally
### Requirements

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

- Node.JS `v22.18.0`
- npm `v10.9.3`

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
- `npm run prettier` - Run Prettier
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
This project follows the [🍰 Feature-Sliced Design (FSD)](https://feature-sliced.design/) architecture

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
- [ThemeSwitcher](/src/widgets/ThemeSwitcher)
- [LangSwitcher](/src/widgets/LangSwitcher)

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
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

There are two types of tests for the `Shared` layer:

1) Unit tests for functions (Jest) - `npm run test:unit`
2) Component tests (React Testing Library) -`npm run test:unit`

You can view the test results at [employees-test-report.netlify.app](https://employees-test-report.netlify.app/)

----
## Storybook
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

Storybook is available for UI components in the `Shared` layer.

To start Storybook:
- `npm run storybook`

View deployed Storybook at [employees-ui.netlify.app](https://employees-ui.netlify.app/)

----

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

`State management: Redux Toolkit`

`API requests: RTK Query`

`Internationalization: i18next`

`Styles: SCSS + CSS Modules`

----

## CI pipeline & Pre-Commit Hooks

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

The GitHub Actions configuration is located in the `.github` folder.

The current CI pipeline includes:
- Building the app and Storybook
- Linting
- Running tests

----

## Deployment:

![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

Main page deployed at [dzch314.online](https://dzch314.online/) (nginx + Selectel)

Storybook deployed at [employees-ui.netlify.app](https://employees-ui.netlify.app/) (netlify)

Test report deployed at [employees-test-report.netlify.app](https://employees-test-report.netlify.app/) (netlify)

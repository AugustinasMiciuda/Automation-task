# Home assignment

Automated test suite using TypeScript + Playwright.

## System Requirements

To run the project you will need working Node.js (at least version 20.11.0) environment with `npm` package manager

## Project Structure

`pageobjects` contains page objects and components

`tests` contains test files

`testData` containts test data used in tests

## Project setup

Inside project directory run NPM to install dependencies

```shell
npm install
```

Then install Playwright browsers
```shell
npx playwright install
```

## Running tests

To run all tests execute:

```shell
npx playwright test
```

To view report execute:

```shell
npx playwright show-report
```

To run only on chrome headed:

```shell
npx playwright test --project=chromium --headed
```

To run only on firefox headed:

```shell
npx playwright test --project=firefox --headed
```

To run individual test for example:

```shell
npx playwright test -g "should add item to cart" --headed --project=chromium
```

If tests run too fast you can uncomment in [playwright.config.ts](playwright.config.ts) launchOptions: { slowMo: 500 }

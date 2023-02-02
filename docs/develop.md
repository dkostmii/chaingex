# Developing project

To start developing project, run `dev` NPM Script:

```bash
npm run dev
```

This will start a Webpack DevServer and open default browser.

The server will watch the changes in project files and refresh the browser it started, so now you can easily dig into some code😎

## Pages

- [Home page (`index.html`)](../src/index.html)
- [Exchanger page (`exchanger.html`)](../src/index.html)

## JavaScript

The project code is split into separate JS files to simlify development:

- [`app.js`](../src/js/app.js) - application entry point. Every module is imported here in order be run with application.

- [`files/script.js`](../src/js/files/script.js) - all next modules, mentioned below, are imported in this file.

- [`pages/home`](../src/js/pages/home/index.js) - **Home page** entry point.

- [`pages/exchanger`](../src/js/pages/exchanger/index.js) - **Exchanger page** entry point.

- [`requests/`](../src/js/requests/index.js) - functionality to load and prepare currency data from API

- [`dom-manipulations/`](../src/js/dom-manipulations/index.js) - All DOM-manipulations used in applications go here.

- [`fn/`](../src/js/fn/index.js) - Widely used functions.

- [`types/`](../src/js/types/currency.js) - Custom types, such as `Currency`.

- [`models/`](../src/js/model/base.js) - Model definitions for **Exchanger page**.

- [`view/`](../src/js/view/index.js) - View definitions for **Exchanger page**.

- [`routers/`](../src/js/routers/scroll.js) - Routers for application are performing redirections across pages.

- [`i18n/`](../src/js/i18n/index.js) - i18n translations for application.

- [`errors/elementNotFound`](../src/js/errors/elementNotFound.js) - widely used error types

Detailed description for each unit are provided in JSDoc format.

## JavaScript tests

[`tests/`](../tests/index.js) for application have same folder structure, as JS.
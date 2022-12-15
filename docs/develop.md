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

- [`script.js`](../src/js/files/script.js) - a module for **Home** page logic. Includes a cryptocurrency fetch from API for **Home page**.

- [`fetch-currencies.js`](../src/js/files/fetch-currencies.js) - includes a `loadCryptos()` function to fetch the currencies from the **Binance API V3 (Spot)**. Also includes cryptocurrency data and settings for `$.ajax()`

    Used at **Exchanger** page.

    The `settings` object is shared with [`script.js`](../src/js/files/script.js) `$.ajax()` call, which also loads the cryptocurrencies, but at **Home** page.

    You might also want to read [Binance API V3 (Spot) Documentation](https://binance-docs.github.io/apidocs/spot/en).

- [`page-load.js`](../src/js/files/exchanger/page-load.js) - a module to bootstrap **Exchanger** page.

    It fetches the cryptocurrencies, calling `loadCryptos()` and adds those to select fields in [`exchanger.html`](../src/exchanger.html).

    Downstream modules, imported here are implemented as Model/View pattern.

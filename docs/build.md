# Building project

To build project, follow these steps:

1. Make sure you have Node.js installed and you opened the terminal at project root folder `exchanger/`

2. Install project dependencies via:

    ```bash
    npm install
    ```

3. Run `build` NPM script:

    ```bash
    npm run build
    ```

4. After build the `dist/` folder is created.

    To test the builden static website, run

    ```bash
    npm run serve-static
    ```

    This will start **browser-sync** server at `dist/` folder.

5. To deploy a project, place the contents of `dist/` folder on server.

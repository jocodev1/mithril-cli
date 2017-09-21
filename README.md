# Mithril CLI
A command-line interface to help you build the scaffolding for your next Mithril project.

[![npm](https://img.shields.io/npm/v/mithril-cli.svg)](https://www.npmjs.com/package/mithril-cli) [![mithril](https://img.shields.io/badge/mithril-1.1.3-blue.svg)](https://mithril.js.org/)

### Installation
Start by installing `mithril-cli` globally.

```sh
npm install mithril-cli -g
```

Navigate to your new desired project location using the command line and run the following command to start the build process.

```sh
mithril build
```

You will be asked to enter a `name`, `description`, and `author`. After you have entered the appropriate values, your project is almost set up!

The only thing left for you to do is install all project dependencies...

```sh
npm install
```

Now your new Mithril project is all setup!

## Building Your Assets

Your project contains a custom webpack configuration to help you build your assets for both development and production environments...

### For development

Run `npm run dev` to quickly build your files for development. To view your changes, open the `dist/index.html` file. Webpack will automatically watch for changes, but you will have to manually refresh your browser each time you make a change.

> Hot-reloading is planned for future versions of this CLI

### For production

Run `npm run build` to build your files for production. The file names will be hashed and will need to be run on an HTTP server at this point.

> You can always run `npm run dev` to replace these production files and continue making changes in your development environment.

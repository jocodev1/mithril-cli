# Mithril CLI
A command-line interface to help you build the scaffolding for your next Mithril project.

### Installation
Install `mithril-cli`

```sh
npm install mithril-cli -g
```

Navigate to your new desired project location.

Run the following command to initiate prompts to begin your build.

```sh
mithril build
```

You will be asked to enter a `name`, `description`, and `author`. After you have entered the appropriate values, your project build should be complete.

Next, install all project dependencies.

```sh
npm install
```

Now your new Mithril project is all setup!



## Building Your Assets

Your project contains a custom webpack configuration to help you build your assets

### For development

Run `npm run dev` to quickly build your files for development. To view your changes, open the `dist/index.html` file. Webpack will automatically watch for changes, but you will have to manually refresh your browser.

(Hot-reloading is planned for future versions of this CLI)

### For production

Run `npm run build` to build your files for production. The file names will be hashed and will need to be run on an HTTP server at this point.

You can always run `npm run dev` to replace these production files and continue making changes in your development environment.

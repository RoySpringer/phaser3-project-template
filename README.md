# Phaser 3 Webpack Project Template

A Phaser 3 project template with ES6/TypeScript support via [Vite](https://vitejs.dev/) a next generation frontend Tool.

This has been updated for Phaser 3.50.0 version and above.

Loading images via JavaScript module `import` is also supported, although not recommended.

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command           | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| `npm install`     | Install project dependencies                                                    |
| `npm run dev`     | Build project and open web server running project                               |
| `npm run build`   | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm run preview` | Locally preview production build                                                |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm run dev`.

After starting the development server with `npm run dev`, you can edit any files in the `src` folder and vite will automatically recompile and reload your server (available at `http://localhost:5173` by default).

## TypeScript

This template also supports TypeScript out of the box. To use TypeScript simply add a TypeScript file with the `.ts` extension and import it. You can also change the `main.js` to `main.ts`. And also change the script tag of the `index.html` from `<script type="module" src="/src/main.js"></script>` to `<script type="module" src="/src/main.ts"></script>`

## Customizing the Template

### Vite

If you want to customize your build, such as adding a plugin (i.e. for loading CSS or fonts), see: [Vite Plugins](https://vitejs.dev/guide/using-plugins.html)

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/index.[hash].js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you should be able to open `http://mycoolserver.com/index.html` and play your game.

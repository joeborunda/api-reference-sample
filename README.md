# API Reference Sample

This repository contains a sample API reference documentation site built with [Docusaurus](https://docusaurus.io/). It demonstrates clear, developer-focused documentation with practical examples and integration guidance.

## Features

- Clear endpoint documentation with parameter descriptions
- Example requests and responses in JSON
- Authentication and error handling guidance
- Integration notes and usage tips
- Blog posts for updates and deeper dives
- Clean, responsive documentation theme

## Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

This will start a local development server at http://localhost:3000/api-reference-sample/ and open it in your browser. The site will automatically reload if you make changes to the source files.

## Deployment

GitHub Pages deployment has been disabled for this repository. I removed the
automatic Docusaurus `deploy` script and deployment configuration from the
project to prevent accidental pushes to `gh-pages`.

If you want to publish the site, pick one of these options:

- Build and upload the static files to any static hosting provider (Netlify, Vercel, S3, etc.):

```bash
# build the static site
npm run build

# serve locally to verify
npm run serve
```

- Re-enable GitHub Pages deployment (not recommended unless intentional): restore the `deploy` script and deployment settings in `docusaurus.config.js`, then run `npm run deploy`. You can also set up a GitHub Actions workflow to build & deploy.

If you'd like, I can update this README with a one-click deploy guide for Netlify or Vercel, or add explicit re-enable instructions for GitHub Pages.

## Project Structure

- `docs/` - API reference documentation files
- `src/pages/` - Standalone pages
- `blog/` - Blog posts and announcements
- `static/` - Static assets like images
- `docusaurus.config.js` - Site configuration
- `sidebars.js` - Documentation navigation structure

## Contributing

To suggest improvements or report issues:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is copyright José Borunda. Feel free to use this as inspiration for your own API documentation projects.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Build & Run Locally

Use the commands below to build and run the site locally for testing.

```bash
# install dependencies
yarn install

# start dev server
yarn start

# build production static site
yarn build

# serve the built site locally
yarn serve
```

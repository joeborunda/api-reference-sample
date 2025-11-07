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

This site is configured for GitHub Pages deployment. To deploy:

```bash
# Build and deploy to GitHub Pages (gh-pages branch)
npm run deploy
```

The site will be deployed to: https://joeborunda.github.io/api-reference-sample/

### Manual Deployment

If you prefer to build and deploy manually:

1. Build the site:
   ```bash
   npm run build
   ```

2. The built files will be in the `build/` directory. You can serve these locally to test:
   ```bash
   npm run serve
   ```

3. To deploy manually, push the contents of `build/` to the `gh-pages` branch:
   ```bash
   git checkout gh-pages
   git add .
   git commit -m "Deploy website - Manual"
   git push
   ```

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

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

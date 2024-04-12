# rspress-plugin-gh-pages ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-gh-pages)

Rspress plugin to add support for automatic deployment to GitHub Pages.

- **No need to push the code and wait for the pages to be updated**: Every time you run `rspress build`, the plugin will automatically push the generated files to the specified `gh-pages` branch of the repository
- **No complex continuous integration configuration**: This plugin pushes the build files to the specified `gh-pages` branch, so page updates take effect much faster.

## Usage

```bash
npm i rspress-plugin-gh-pages
pnpm add rspress-plugin-gh-pages
```

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import ghPages from 'rspress-plugin-gh-pages';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    ghpages({
      repo: 'https://github.com/linbudu599/rspress-plugins.git',
      branch: 'website',
    }),
  ],
});
```

## Configure

## directory

Target directory to push to the `gh-pages` branch, `config.outDir` will be used if this configuration is not specified.

- Type: `string`

## siteBase

- Type: `string`

Deploying to repositories other than the `<user>.github.io` repository requires specifying the `siteBase` option, as an example, deploying to repository `<user>/awesome-plugins` will require setting `siteBase` to `/awesome-plugins`, as the page will be hosted at `https://<user>.github.io/awesome-plugins`.

By default, this plugin will try to parse the `repo` option to get a `siteBase` value(if repo is a `github.io` repository, the `siteBase` will be `/`, otherwise, the `siteBase` will be `/<repo-name>`), you can also specify the `siteBase` option to override the default value.

## silent

Disable terminal log output from this plugin.

- Type: `boolean`
- Default: false

## repo

- Type: `string`
- `Required`

The repository to deploy to, you can also specify another repository to deploy to.

More options can be found in documentation of [gh-pages](https://github.com/tschaub/gh-pages).

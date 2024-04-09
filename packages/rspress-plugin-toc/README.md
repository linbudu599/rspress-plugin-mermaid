# rspress-plugin-toc ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-toc)

Rspress plugin that injects a table of contents into the page.

## Compares to built-in Toc component

Rspress provides a built-in [`<Toc />`](https://rspress.dev/zh/api/client-api/api-components.html#table-of-contents) component that can be used to generate a table of contents. So, what are the situations where you would need this plugin?

- ✅ You want to automatically insert the Toc component for every page, instead of importing it manually → See [useOfficialComponent](#useofficialcomponent).
- ✅ You want to inject the Toc component with a toc heading(like `## Table of Contents`) → See [tocHeading](#tocheading).
- ✅ You want to be able to set the max depth of the headings that present in the Toc component → See [maxDepth](#maxdepth).

**The Toc component inserted by this plugin exactly replicates the style of the rspress built-in Toc component.**(Huge thanks to the rspress team for creating such a beautiful component!)

## Usage

```bash
npm i rspress-plugin-toc
pnpm add rspress-plugin-toc
```

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import toc from 'rspress-plugin-toc';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [toc()],
});
```

## Configure

### useOfficialComponent

Whether to use the built-in Toc component provided by rspress.

- Type: `boolean`
- Default: `false`

If this option is enabled, the plugin will simply automatically inject the `import { Toc } from 'rspress/theme'` import statement before each file and place the `<Toc />` component in the appropriate place.

**Also, options other than `tocHeading` will be ignored.**

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import toc from 'rspress-plugin-toc';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [toc({
    useOfficialComponent: true,
  })],
});
```

### tocHeading

The heading to display before the table of contents, set to `false` to prevent the heading from being displayed.

- Type: `string | boolean`
- Default: `Table of Contents`

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import toc from 'rspress-plugin-toc';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [toc({
    tocHeading: '内容导航',
  })],
});
```

### maxDepth

Max heading level to display in the table of contents.

- Type: `number`
- Default: `4`

See [mdast-util-toc#options](https://github.com/syntax-tree/mdast-util-toc?tab=readme-ov-file#options) for more information.

### skip

Ignore these headings when generating the table of contents.

- Type: `string`

See [mdast-util-toc#options](https://github.com/syntax-tree/mdast-util-toc?tab=readme-ov-file#options) for more information.

### tight

Whether to use tight list items in the table of contents.

- Type: `boolean`
- Default: `true`

See [mdast-util-toc#options](https://github.com/syntax-tree/mdast-util-toc?tab=readme-ov-file#options) for more information.
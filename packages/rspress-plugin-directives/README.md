# rspress-plugin-directives ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-directives)

[简体中文](./README.zh-CN.md)

Rspress plugin to support custom directive transformations.

Although rspress already supports directive syntax, it is limited to support for its built-in components such as `:::warning`, `:::tip`, etc. Beyond these built-in directives, you can't add your own directive-to-component conversion logic.

This plugin allows you to add new custom directives, and conversions from custom directives to global components.

Instead of importing components and using them directly inside an MDX file, with this plugin you can quickly refer to them via directives without importing them.

## Usage

```bash
npm i rspress-plugin-directives
pnpm add rspress-plugin-directives
```

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import directives from 'rspress-plugin-directives';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    directives({
      directive: 'guide',
      transformer: {
        type: 'globalComponent',
        getComponentName: (meta) => 'Guide',
        componentPath: path.join(__dirname, './components/Guide.tsx'),
      },
    }),
  ],
});
```

The configuration above will register a new directive `:::guide` that will be transformed into a global component `Guide` from the file `./components/Guide.tsx`.

Write markdown like this:

```markdown
:::guide
Skip this section if you are already familiar with the topic.
:::
```

And it will be transformed into:

```mdx
<Guide>Skip this section if you are already familiar with the topic.</Guide>
```

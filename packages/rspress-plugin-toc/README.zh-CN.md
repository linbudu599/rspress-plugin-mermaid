# rspress-plugin-toc ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-toc)

自动为你的文档页面生成内容导航。

<div align="center">
  <img src="./image.png" alt="sample" width="600" height="380" />
</div>

## 对比内置的 Toc 组件

Rspress 提供了内置的 [`<Toc />`](https://rspress.dev/zh/api/client-api/api-components.html#table-of-contents) 组件，可以用于生成内容导航。那么，你会在什么情况下需要这个插件？

- ✅ 你想要在内容导航前插入一个标题(如 `## 内容导航`) → 查看 [tocHeading](#tocheading)。
- ✅ 你想要自动为每个页面插入 Toc 组件，而不是手动在页面上导入。 → 查看 [useOfficialComponent](#useofficialcomponent)。
- ✅ 你想要设置内容导航中显示的标题的最大深度 → 查看 [maxDepth](#maxdepth)。

**此插件插入的 Toc 组件完全复制了 rspress 内置的 Toc 组件的样式。**（非常感谢 rspress 团队创建了这样一个高大上的组件！）

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

## 配置

### useOfficialComponent

是否使用 rspress 提供的内置 Toc 组件。

- Type: `boolean`
- Default: `false`

如果启用此选项，插件将只会简单地在每个文件之前自动注入 `import { Toc } from 'rspress/theme'` 导入语句，并将 `<Toc />` 组件放在适当的位置。

**此外，除了 `tocHeading` 之外的选项将被忽略。**

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import toc from 'rspress-plugin-toc';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    toc({
      useOfficialComponent: true,
    }),
  ],
});
```

### tocHeading

显示在内容导航前的标题，设置为 `false` 来禁用标题插入。

- Type: `string | boolean`
- Default: `Table of Contents`

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import toc from 'rspress-plugin-toc';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    toc({
      tocHeading: '内容导航',
    }),
  ],
});
```

### maxDepth

展示在内容导航中的标题的最大深度。

- Type: `number`
- Default: `4`

查看 [mdast-util-toc#options](https://github.com/syntax-tree/mdast-util-toc?tab=readme-ov-file#options) 获取更多信息。

### skip

忽略生成内容导航时的这些标题。

- Type: `string`

查看 [mdast-util-toc#options](https://github.com/syntax-tree/mdast-util-toc?tab=readme-ov-file#options) 获取更多信息。

### tight

是否在内容导航中使用紧凑的列表项。

- Type: `boolean`
- Default: `true`

查看 [mdast-util-toc#options](https://github.com/syntax-tree/mdast-util-toc?tab=readme-ov-file#options) 获取更多信息。

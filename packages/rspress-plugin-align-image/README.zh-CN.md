# rspress-plugin-align-image ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-align-image)

让 Markdown 中图片自动居中的 Rspress 插件。

此插件通过将生成 HTML 中的图片元素放置在一个 `flex` + `justify: center` 的 div 元素中来实现。

## 使用

```bash
npm i rspress-plugin-align-image
pnpm add rspress-plugin-align-image
```

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [alignImage()],
});
```

## 配置

### justify

配置图片的对齐方式，支持 `left`、`right` 和 `center`。

- Type: `'left' | 'right' | 'center'`
- Default: `'center'`

### containerClassNames

额外添加到容器 div 元素的类名。

- Type: `string[]`

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    alignImage({
      justify: 'left',
      containerClassNames: ['my-class'],
    }),
  ],
});
```

以上的配置将生成如下的 HTML 结构：

```html
<div class="my-4 flex flex-row justify-start my-class">
  <img src="image.jpg" />
</div>
```

# rspress-plugin-mermaid ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-mermaid)

为 Rspress 支持基于 [Mermaid](https://mermaid.js.org/#/) 的流程图、时序图等图表。

编写 Mermaid 图表时，只需使用 `mermaid` 代码块，插件会自动将其转换为 SVG。

````markdown
```mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```
````

<div align="center">
  <img src="./image.png" alt="sample" width="400" height="560" />
</div>

## 使用

```bash
npm i rspress-plugin-mermaid
pnpm add rspress-plugin-mermaid
```

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [mermaid()],
});
```

## 配置

### mermaidConfig

Mermaid 配置选项，将传递给 `mermaid.initialize` 函数。查看 [mermaid 文档](https://mermaid.js.org/config/schema-docs/config.html) 了解更多细节。

- Type: `object`

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    mermaid({
      mermaidConfig: {
        theme: 'forest',
      },
    }),
  ],
});
```

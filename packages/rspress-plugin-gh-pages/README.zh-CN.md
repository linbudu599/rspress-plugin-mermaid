# rspress-plugin-gh-pages ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-gh-pages)

提供 GitHub Pages 自动部署支持的 Rspress 插件。

- **无需推送代码后寂寞等待页面更新**： 每次运行 `rspress build` 时，插件会自动将生成的静态资源推送到指定仓库的指定分支。
- **无需复杂的持续集成配置**： 插件仅会将静态文件推送到指定的分支，而无需等待云端构建流程，因此页面更新生效速度更快。

## 使用

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

## 配置

## directory

将要推送到 `gh-pages` 分支的目标目录，如果未指定此配置，则将使用 `config.outDir`。

- Type: `string`

## siteBase

配置站点的基础路径，可以理解为 `publicPath`.

- Type: `string`

当部署到 `<user>/awesome-plugins` 仓库时，需要将 `siteBase` 配置设置为 `/awesome-plugins`，因为页面将托管在 `https://<user>.github.io/awesome-plugins`。

默认情况下，该插件会尝试解析 `repo` 选项以获取 `siteBase` 值（如果 repo 是一个 `github.io` 类型的仓库，则 `siteBase` 将是 `/`，否则，`siteBase` 将是 `/<repo-name>`），你也可以指定 `siteBase` 选项来覆盖默认值。

## silent

禁用此插件的终端日志输出。

- Type: `boolean`
- Default: false

## repo

- Type: `string`
- `Required`

将要部署到的仓库，你也可以指定另一个仓库来部署。

更多选项可以在 [gh-pages](https://github.com/tschaub/gh-pages) 找到。

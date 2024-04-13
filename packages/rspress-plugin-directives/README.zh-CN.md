# rspress-plugin-directives ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-directives)

用于实现自定义指令转换的 Rspress 插件。

虽然 rspress 已经支持指令语法，但仅限于支持其内置组件，如 `:::warning`、`:::tip` 等。除了这些内置指令，你无法注册自定义的指令-组件转换逻辑。

有了这个插件，您无需导入组件并直接在 MDX 文件中使用它们，而是可以通过指令快速引用它们。

通过此插件，你可以注册自定义的指令-组件转换逻辑，这样一来就能够像 rspress 的内置指令一样，直接在 md/mdx 内使用指令来快捷引用组件。

## 使用

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

以上的配置将注册一个新的指令 `:::guide`，它将被转换为文件 `./components/Guide.tsx` 中的全局组件 `Guide`。

在 markdown 中写入如下内容：

```markdown
:::guide
Skip this section if you are already familiar with the topic.
:::
```

它将被转换为：

```mdx
<Guide>Skip this section if you are already familiar with the topic.</Guide>
```

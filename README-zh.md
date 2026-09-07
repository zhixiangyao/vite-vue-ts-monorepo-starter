# Vite + Vue 3 + TypeScript + Monorepo

[English](./README.md) · 中文

> 这是一个基于 pnpm 和 Turborepo 的 monorepo 项目, 包含共享的组件包和工具包.

- **编辑器:**
  - [VSCode](https://code.visualstudio.com/)

- **VSCode 扩展:**
  - [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

- **开发环境:**
  - node >= 22.19.0 (或 >= 24)
  - pnpm => 12.3.4

## 克隆项目

```shell
git clone git@github.com:zhixiangyao/vite-vue-ts-monorepo-starter.git
cd vite-vue-ts-monorepo-starter
pnpm i # 如果还没有安装 pnpm, 请先执行: npm install -g pnpm
```

## 使用

### 开发

点击 http://localhost:5173

```shell
pnpm dev
```

### 在 code-server 中开发

当在 [code-server](https://github.com/coder/code-server) 中运行时, 请改用此命令,
让开发服务器通过 code-server 的路径代理对外提供访问:

```shell
pnpm dev:code-server
```

它会向 Vite 传入 `--host --base=/absproxy/5173/`, 因此你可以在 code-server
工作区中打开:

```
http://localhost:5173/absproxy/5173/
```

### 构建

```shell
pnpm build
```

### 检查

```shell
pnpm typecheck
pnpm lint:check
pnpm fmt
pnpm fmt:check
pnpm lint:css
```

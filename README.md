# Vite + Vue 3 + TypeScript + Monorepo

English · [中文](./README-zh.md)

> This is a monorepo project based on pnpm and Turborepo, with shared packages for components and utilities.

- **Editor:**
  - [VSCode](https://code.visualstudio.com/)

- **VSCode extension:**
  - [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

- **Development ENV:**
  - node >= 22.19.0 (or >= 24)
  - pnpm => 12.3.4

## Clone

```shell
git clone git@github.com:zhixiangyao/vite-vue-ts-monorepo-starter.git
cd vite-vue-ts-monorepo-starter
pnpm i # If not install pnpm, please run: npm install -g pnpm
```

## Usage

### Development

click it http://localhost:5173

```shell
pnpm dev
```

### Development in code-server

When running inside [code-server](https://github.com/coder/code-server), use this
instead to serve the dev server through code-server's path proxy:

```shell
pnpm dev:code-server
```

It passes `--host --base=/absproxy/5173/` to Vite, so you can open the app in the
code-server workspace at:

```
http://localhost:5173/absproxy/5173/
```

### Build

```shell
pnpm build
```

### Check

```shell
pnpm typecheck
pnpm lint:check
pnpm fmt
pnpm fmt:check
pnpm lint:css
```

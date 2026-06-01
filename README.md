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
  - git => 2.39.0
  - node => 26.2.0
  - pnpm => 11.5.0

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

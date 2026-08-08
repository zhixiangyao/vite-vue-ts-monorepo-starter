

# Vite + Vue 3 + TypeScript + Monorepo

Inglés · [中文](./README-zh.md)

> Este es un proyecto monorepo basado en pnpm y Turborepo, con paquetes compartidos para componentes y utilidades.

- **Editor:**
  - [VSCode](https://code.visualstudio.com/)

- **Extensión de VSCode:**
  - [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

- **Entorno de desarrollo (ENV):**
  - git => 2.39.0
  - node => 26.5.0
  - pnpm => 11.13.0

## Clonar

```shell
git clone git@github.com:zhixiangyao/vite-vue-ts-monorepo-starter.git
cd vite-vue-ts-monorepo-starter
pnpm i # Si no tienes pnpm instalado, ejecuta: npm install -g pnpm
```

## Uso

### Desarrollo

Accede a http://localhost:5173

```shell
pnpm dev
```

### Build

```shell
pnpm build
```

### Verificar

```shell
pnpm typecheck
pnpm lint:check
pnpm fmt
pnpm fmt:check
pnpm lint:css
```

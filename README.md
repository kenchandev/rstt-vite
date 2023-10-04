# React + SWC + TypeScript + Tailwind CSS + Vite

This template adds Tailwind CSS and personal development configurations to the [`react-swc-ts`](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) template, which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This template is perfect for demoing small React applications.

## Installation

_Note_: Before proceeding, verify that you have `pnpm` installed on your machine.

1. Clone this repository.
2. Within the root of this project directory, run `pnpm install`.
3. Spin up the Vite dev server by running `pnpm run dev`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

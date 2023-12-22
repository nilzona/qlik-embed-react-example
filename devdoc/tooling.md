---
title: Tooling
description: Recommended setup when working with frontend solutions at Qlik
category: Frontend
type: Recommended Setup
typeSortPriority: 2
pageSortPriority: 6
---

## Building a microfrontend?

The recommended setup for Microfrontends(QMFE) is summarized [here](./qmfe.md).

## Recommeded Build Tools

Use [webpack](https://webpack.js.org/) to build and bundle your frontend project. Webpack is highly configurable and battle
tested since many years back.

Also use the [`@qlik/browserslist-config`](https://github.com/qlik-oss/dev-tools-js/tree/main/packages/browserslist-config)
For keeping the build setup on par with Qlik's official support for browsers.

## Recommended lint setup

Use [eslint](https://eslint.org) as linting tool and use the [`@qlik/eslint-config`](https://www.npmjs.com/package/@qlik/eslint-config)
library as your eslint config. This will keep a higher quality of your code.

## Recommended typescript setup

Use the latest typescript version and use [`@qlik/tsconfig`](https://www.npmjs.com/package/@qlik/tsconfig) as the base
for your typescript setttings.

## Recommended formatting setup

Use [prettier](https://prettier.io) as formatting tool and use
[`@qlik/prettier-config`](https://www.npmjs.com/package/@qlik/prettier-config) as config.

## Recommended Test Frameworks

### Unit Tests

Use [vitest](https://vitest.dev) to unit test your code. Vitest is a low-config, blazing fast test framework with
excellent assertion library and it supports esm modules out of the box.

### Browser Tests

Use [playwright](https://playwright.dev) to run browser tests. Playwright has a solid api for browser tests with nice
features for selectors and waiting for rendered elements, acting on events etc etc.

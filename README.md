# AndcultureCode.JavaScript.Core
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Build Status](https://travis-ci.org/AndcultureCode/AndcultureCode.JavaScript.Core.svg?branch=master)](https://travis-ci.org/AndcultureCode/AndcultureCode.JavaScript.Core)
[![codecov](https://codecov.io/gh/AndcultureCode/AndcultureCode.JavaScript.Core/branch/master/graph/badge.svg)](https://codecov.io/gh/AndcultureCode/AndcultureCode.JavaScript.Core)

Common patterns, functions, etc... used when building javascript applications

## Getting started

This package is installed via npm or yarn

```shell
# npm
npm install --save-dev andculturecode-javascript-core

# yarn
yarn add andculturecode-javascript-core --dev
```

From there you can import the variety of modules.

```typescript
import { CollectionUtils, CoreUtils } from "andculturecode-javascript-core";
```

You can also reference the global distribution package within a website which gives you access to the `AndcultureCode` namespace. See the example below

```html
<script src="https://unpkg.com/browse/andculturecode-javascript-core@[version-number]/dist/global/index.js"></script>

<script>
    var myAuthObject = AndcultureCode.RouteUtils.queryStringToObject(
        "#token=bada55cafe"
    );
</script>
```

## Peer dependencies

This package wraps several external packages for our own configuration and ease of use, such as `axios`, `i18next`, `lodash`, etc. If you are using the standard distribution of this package, these will need to be installed alongside this package, even if you do not plan on leveraging features that rely on them.

If using the global distribution, you will likely want to reference these in your website prior to referencing this package. See [test-global-distribution.html](./test-global-distribution.html) for the full list of dependencies. Unlike the standard distribution, peer dependencies are only required if your code will be executing code paths that rely on those packages.

## Internationalization

This package offers a variety of functions for localizing an application, wrapping [`i18next`](https://github.com/i18next/i18next) and [`i18next-browser-languagedetector`](https://github.com/i18next/i18next-browser-languageDetector). A complete setup guide can be found in the wiki [here](<https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/wiki/Internationalization-(i18n)>).

If developing in VS Code, the [`kazoo`](https://marketplace.visualstudio.com/items?itemName=brandongregoryscott.kazoo) extension can be used to quickly insert typed keys and placeholder translations from Google Translate. ([source](https://github.com/brandongregoryscott/kazoo) | [install](https://marketplace.visualstudio.com/items?itemName=brandongregoryscott.kazoo))

## Documentation

[Full API documentation](docs/README.md)

# Contributing

Information on contributing to this repo is in the [Contributing Guide](CONTRIBUTING.md)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.winton.me/"><img src="https://avatars.githubusercontent.com/u/48424?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Winton DeShong</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=wintondeshong" title="Code">💻</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=wintondeshong" title="Documentation">📖</a> <a href="#maintenance-wintondeshong" title="Maintenance">🚧</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=wintondeshong" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
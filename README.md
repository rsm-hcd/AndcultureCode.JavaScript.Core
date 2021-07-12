# AndcultureCode.JavaScript.Core

![build status](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/actions/workflows/build.yaml/badge.svg)
[![codecov](https://codecov.io/gh/AndcultureCode/AndcultureCode.JavaScript.Core/branch/main/graph/badge.svg)](https://codecov.io/gh/AndcultureCode/AndcultureCode.JavaScript.Core)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
    <td align="center"><a href="http://www.winton.me/"><img src="https://avatars.githubusercontent.com/u/48424?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Winton DeShong</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=wintondeshong" title="Code">💻</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=wintondeshong" title="Documentation">📖</a> <a href="#maintenance-wintondeshong" title="Maintenance">🚧</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=wintondeshong" title="Tests">⚠️</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3Awintondeshong" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/brandongregoryscott"><img src="https://avatars.githubusercontent.com/u/11774799?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brandon Scott</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=brandongregoryscott" title="Code">💻</a> <a href="#maintenance-brandongregoryscott" title="Maintenance">🚧</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=brandongregoryscott" title="Tests">⚠️</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3Abrandongregoryscott" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.saidshah.com"><img src="https://avatars.githubusercontent.com/u/19719299?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Said B Shah</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=SaidShah" title="Code">💻</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=SaidShah" title="Tests">⚠️</a> <a href="#maintenance-SaidShah" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://mjones.network"><img src="https://avatars.githubusercontent.com/u/8648891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mat Jones</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=mrjones2014" title="Code">💻</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=mrjones2014" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://resume.dylanjustice.com"><img src="https://avatars.githubusercontent.com/u/22502365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dylan Justice</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=dylanjustice" title="Code">💻</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=dylanjustice" title="Tests">⚠️</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3Adylanjustice" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/KevinBusch"><img src="https://avatars.githubusercontent.com/u/775414?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Busch</b></sub></a><br /><a href="#infra-KevinBusch" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-KevinBusch" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/Stefanie899"><img src="https://avatars.githubusercontent.com/u/37462028?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stefanie Leitch</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3AStefanie899" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/dtnhinh"><img src="https://avatars.githubusercontent.com/u/69260561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nhinh Dao</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=dtnhinh" title="Tests">⚠️</a> <a href="#maintenance-dtnhinh" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://mytydev.com"><img src="https://avatars.githubusercontent.com/u/37794?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Tyson</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=myty" title="Code">💻</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/commits?author=myty" title="Tests">⚠️</a> <a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3Amyty" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/jhugs"><img src="https://avatars.githubusercontent.com/u/14300627?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joshua Hughes</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3Ajhugs" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://jebediahelliott.com"><img src="https://avatars.githubusercontent.com/u/26680652?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeb</b></sub></a><br /><a href="https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/pulls?q=is%3Apr+reviewed-by%3Ajebediahelliott" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

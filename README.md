# AndcultureCode.JavaScript.Core

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
import {
    CollectionUtils,
    CoreUtils
} from "andculturecode-javascript-core";
```

You can also reference the global distribution package within a website which gives you access to the `AndcultureCode` namespace. See the example below

```html
<script src="https://unpkg.com/browse/andculturecode-javascript-core@[version-number]/dist/global/index.js"></script>

<script>
    var myAuthObject = AndcultureCode.RouteUtils.queryStringToObject('#token=bada55cafe')
</script>

```

**NOTE** - This source code relies on several peer dependencies, most of which are not included in this bundled global distribution.  You will likely want to reference these in your website prior to referencing the `andculture-javascript-core` global package.  See [test-global-distribution.html](./test-global-distribution.html) for the full list of dependencies.  Also note that peer dependencies are only required if your code will be executing code paths that utilize any of those peer dependencies.

## Documentation

[Full API documentation](docs/README.md)

# Community

[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/0)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/0)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/1)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/1)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/2)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/2)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/3)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/3)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/4)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/4)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/5)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/5)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/6)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/6)[![](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/images/7)](https://sourcerer.io/fame/andCulture/AndcultureCode/AndcultureCode.JavaScript.Testing/links/7)

# Contributing

Information on contributing to this repo is in the [Contributing Guide](CONTRIBUTING.md)

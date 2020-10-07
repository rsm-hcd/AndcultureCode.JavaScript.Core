# How to Contribute

## Considerations
This repo is now distributing packages for both module loaded applications as well as global distribution for things such as websites.  What this means is:

1.  When adding new peer dependencies to this repo, please account for them in one of the following ways:
    - Bundle the dependency as part of this package. Add these dependencies by updating [dependency-externals.json](./dependency-externals.json).
    - Externalize the dependency.  This forces the consumer to reference the dependency using `<script />` tags.  Add these dependencies by updating [dependency-bundles.json](./dependency-bundles.json).
2.  When adding new external peer dependencies, please make sure to perform the following:
    - Add any new needed `<script />` peer dependency references to  [test-global-distribution.html](./test-global-distribution.html).  Please use a reliable CDN such as https://unpkg.com or https://cdnjs.cloudflare.com.
    -  Add a small, quick example to test that peer dependency within [test-global-distribution.html](./test-global-distribution.html).  You will need to run `npm run build` in order to regenerate the global package beforehand.  Open up the HTML file in your browser and validate there are no javascript errors.
3.  We need to be careful of loosely adding new peer dependencies to this repo.  Adding new peer dependencies to this repo means that the global package will slowly but surely increase in size with peer dependency code (if bundling) OR force consumers to pre-load the peer dependencies (if excluding from bundling).  Neither of these approaches are ideal.  When considering a new peer dependency, please consider adding an issue to the repo before hand so others can be involved early in the process.

### Automated Testing

This repo uses a simple Cypress test to open and test [test-global-distribution.html](./test-global-distribution.html) to validate there are no javascript errors.  Also, any unhandled dependencies within `package.json/dependencies` will throw errors during the build process.  Make sure you add them either as externals or bundles to prevent these build errors.

Additional information on contributing to this repo is in the [Contributing Guide](https://github.com/AndcultureCode/AndcultureCode/blob/master/CONTRIBUTING.md) in the Home repo.
# How to Contribute

## Considerations
This repo is now distributing packages for both module loaded applications as well as global distrubtion for things such as websites.  What this means is:

1.  When adding new peer dependencies to this repo, please make sure to handle them appropriately within [webpack.config.js](./webpack.config.js).
2.  Please add any new needed `<script />` peer dependency references to  [sample-global-distro.html](./sample-global-distro.html).
3.  Add a small, quick example to test that peer dependency within [sample-global-distro.html](./sample-global-distro.html).  You will need to run `npm run build` in order to regenerate the global package beforehand.  Open up the HTML file in your browser and validate there are no javascript errors.
4.  We need to be careful of loosely adding new peer dependencies to this repo.  Adding new peer dependencies to this repo means that the global package will slowly but surely increase in size with peer dependency code (if bundling) OR force consumers to pre-load the peer dependencies (if excluding from bundling).  Neither of these approaches are ideal.  When considering a new peer dependency, please consider adding an issue to the repo before hand so others can be involved early in the process.

Additional information on contributing to this repo is in the [Contributing Guide](https://github.com/AndcultureCode/AndcultureCode/blob/master/CONTRIBUTING.md) in the Home repo.
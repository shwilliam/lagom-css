# Lagom CSS

> Functional, utility-first CSS

![npm version](https://img.shields.io/npm/v/lagom-css.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/lagom-css.svg)

## About

Lagom is a CSS library that focuses on quick & straightforward class-based, utility-first styling. Inspired by projects such as [Tachyons](https://github.com/tachyons-css/tachyons) & [Wing](https://github.com/kbrsh/wing), which take similar approaches, Lagom uses class names & size increments that make sense and allow users to intuitively style their site/app without constantly referring to the CSS library's docs.

You can find an overview of the available styles in use [here](https://shwilliam.github.io/lagom-css/).

## Getting started

The easiest way to use this library is to paste the following link tag in the head of your HTML file:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/lagom-css" />
```

If you are using a bundler, such as webpack, install the package from npm by running `npm i lagom-css` and import it in JavaScript (`import 'lagom-css'`).

## Unused CSS

Utility CSS libraries can be quite large. If performance or file-size matters to you (or you're using this production), I would recommend using a tool such as [PurifyCSS](https://github.com/purifycss/purifycss) to remove unused CSS. Doing this, the CSS file that you would want to target is `/dist/lagom.min.css` in this package (download it [here](https://raw.githubusercontent.com/shwilliam/lagom-css/master/dist/lagom.min.css)).

## Contributing

This project is open to and encourages contributions! Feel free to discuss any proposed changes in the [issues](https://github.com/shwilliam/lagom-css/issues). If you wish to work on this project:

1. [Fork the project](https://github.com/shwilliam/lagom-css)
2. Create a development branch (`git checkout -b new-feature-branch`)
3. Make your changes
4. Ensure tests pass/update tests
3. Commit your changes with an [appropriate commit message](https://gist.github.com/shwilliam/c25620cd065350ae319bb36c70f9d40f##conventional-commits) (`git commit -am 'feat: add new feature'`)
4. Push to the branch (`git push origin new-feature-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/lagom-css/pull/new/master)

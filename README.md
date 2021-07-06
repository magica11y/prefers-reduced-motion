`prefersReducedMotion()`
========================
> Detects user’s preferences for reduced motion using the `prefers-reduce-motion` CSS3 level 5 media query.

[![Travis](https://img.shields.io/travis/com/magica11y/prefers-reduced-motion.svg?style=for-the-badge)](https://travis-ci.com/magica11y/prefers-reduced-motion)
[![NPM](https://img.shields.io/npm/v/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/@magica11y/prefers-reduced-motion)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion)
[![Coveralls](https://img.shields.io/coveralls/magica11y/prefers-reduced-motion.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/prefers-reduced-motion)
[![David DM](https://img.shields.io/david/magica11y/prefers-reduced-motion.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/prefers-reduced-motion)
[![David DM](https://img.shields.io/david/dev/magica11y/prefers-reduced-motion.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/prefers-reduced-motion?type=dev)
[![NodeJS](https://img.shields.io/node/v/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/@magica11y/prefers-reduced-motion)
[![License](https://img.shields.io/github/license/magica11y/prefers-reduced-motion.svg?style=for-the-badge "MIT license")](LICENSE.md)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/magica11y/prefers-reduced-motion?style=for-the-badge "Snyk vulnerabilities status")](https://snyk.io/test/github/magica11y/prefers-reduced-motion?targetFile=package.json)

[![Magica11y cover](https://cdn.jsdelivr.net/gh/magica11y/cauldron@1.0.7/assets/Magica11y-cover.jpg "Magica11y cover")](https://magica11y.github.io)


# :sparkles: Introduction

Quoting from the [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5)
[media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) specfication…

> The [`prefers-reduced-motion`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) media feature
> is used to detect if the user has requested the system to minimize the amount of animation or motion it uses.

:roller_coaster: **`prefersReducedMotion()`** is part of :crystal_ball: [**Magica11y**](https://magica11y.github.io),
which provides a suite of functions to detect “user-preference” and “environment” media features.

[Magica11y](https://magica11y.github.io) functions are awesome because…
  * They have **zero** dependencies
  * They’re **lightweight**; e.g. `prefersReducedMotion()` is just [![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/prefers-reduced-motion.svg?style=flat-square&label "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion) minified, or [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/prefers-reduced-motion.svg?style=flat-square&label "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion) minified & gzipp’d
  * They use the **[`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)** API underneath
  * They’re optimized for **performance**; all the module functions are designed in such a way that they exit early
  * They provide a **clean**, **well-documented** and **semantic** API to work with

In addition to `prefersReducedMotion()`, [Magica11y](https://magica11y.github.io) also provides…

  * :tv: [`environmentBlending()`](https://github.com/magica11y/environment-blending)
  * :new_moon: [`invertedColors()`](https://github.com/magica11y/inverted-colors)
  * :candle: [`lightLevel()`](https://github.com/magica11y/light-level)
  * :art: [`forcedColors()`](https://github.com/magica11y/forced-colors)
  * :last_quarter_moon: [`prefersColorScheme()`](https://github.com/magica11y/prefers-color-scheme)
  * :high_brightness: [`prefersContrast()`](https://github.com/magica11y/prefers-contrast)
  * :gem: [`prefersReducedTransparency()`](https://github.com/magica11y/prefers-reduced-transparency)

# :rocket: Getting started

## :building_construction: Installation

You can install `prefersReducedMotion()` using a package manager such as [`yarn`](https://yarnpkg.com/en/package/@magica11y/prefers-reduced-motion) or [`npm`](https://www.npmjs.com/package/@magica11y/prefers-reduced-motion)…

```sh
$ yarn add "@magica11y/prefers-reduced-motion"
# OR
$ npm install --save "@magica11y/prefers-reduced-motion"
```

You can also include `prefersReducedMotion()` from a CDN on your page, such as [jsDelivr](https://www.jsdelivr.com/package/npm/@magica11y/prefers-reduced-motion) or [unpkg](https://unpkg.com/@magica11y/prefers-reduced-motion)…

```html
<script src="https://cdn.jsdelivr.net/npm/@magica11y/prefers-reduced-motion@latest/dist/magica11y.prefersReducedMotion.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/@magica11y/prefers-reduced-motion@latest/dist/magica11y.prefersReducedMotion.js"></script>
```

## :game_die: Usage

`prefersReducedMotion()` is distributed as a [UMD](https://github.com/umdjs/umd) module, so you can use it as a browser global…

```js
var motionPreference = window.magica11y.prefersReducedMotion.default();
var disableAnimations = (motionPreference === window.magica11y.prefersReducedMotion.motionPreferences.REDUCE);
```

… or as a CommonJS module…

```js
const prefersReducedMotion = require('@magica11y/prefers-reduced-motion');
const motionPreference = prefersReducedMotion.default();
const disableAnimations = (motionPreference === prefersReducedMotion.motionPreferences.REDUCE);
```

… or as an ES module…

```js
import prefersReducedMotion, { motionPreferences } from '@magica11y/prefers-reduced-motion';

const motionPreference = prefersReducedMotion();
const disableAnimations = (motionPreference === motionPreferences.REDUCE);
```

The `motionPreferences` object contains all the possible values supported by the `'prefers-reduce-motion'` media query…

* `motionPreferences.NO_PREFERENCE` (spec: [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference))
  > Indicates that the user has made no preference known to the system.
* `motionPreferences.REDUCE` (spec: [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce))
  > Indicates that user has notified the system that they prefer an interface that minimizes the amount of movement or animation,
  > preferably to the point where all non-essential movement is removed.
* `null`
  > The user’s preference could not be determined.


# :checkered_flag: Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs)
in `node_modules/@magica11y/prefers-reduced-motion/lib` by configuring them in your `.flowconfig`…

```
[libs]
node_modules/@magica11y/prefers-reduced-motion/lib
```

Now, you can use the Flow types as follows…

```js
// @flow
import prefersReducedMotion, { type MotionPreference } from '@magica11y/prefers-reduced-motion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
```

:tophat: **Note**: `prefersReducedMotion()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void)
type (i.e. `MotionPreference`). So using the `?` prefix to indicate nullable types is recommended (i.e. `?MotionPreference`).


# :books: Further reading

* [Change Accessibility Display preferences on Mac — Apple Support](https://support.apple.com/guide/mac-help/unac089/mac)
* [Reduce screen motion on your iPhone, iPad, or iPod touch — Apple Support](https://support.apple.com/en-lamr/HT202655)


# :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with :heart: by [Rishabh](https://rishabh.ink).

[![Twitter](https://img.shields.io/twitter/follow/rishabh_ink.svg?style=social)](https://twitter.com/rishabh_ink)

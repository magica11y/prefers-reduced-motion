![Magica11y](https://github.com/magica11y/cauldron/blob/master/assets/Magica11y-cover.jpg "Magica11y cover")

:roller_coaster: `prefers-reduced-motion()`
===========================================
> **Magica11y’s** `prefers-reduced-motion()` function detects user’s preferences for reduced motion using the
> [`'prefers-reduce-motion'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
> [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).
>
> The [`prefers-reduced-motion`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) media query is used
> to detect if the user has requested the system minimize the amount of animation or motion it uses.

[![Travis](https://img.shields.io/travis/com/magica11y/prefers-reduced-motion.svg?style=for-the-badge)](https://travis-ci.com/magica11y/prefers-reduced-motion)
[![npm](https://img.shields.io/npm/v/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/@magica11y/prefers-reduced-motion)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion)
[![Coveralls](https://img.shields.io/coveralls/magica11y/prefers-reduced-motion.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/prefers-reduced-motion)
[![David](https://img.shields.io/david/magica11y/prefers-reduced-motion.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/prefers-reduced-motion)
[![David](https://img.shields.io/david/dev/magica11y/prefers-reduced-motion.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/prefers-reduced-motion?type=dev)
[![node](https://img.shields.io/node/v/@magica11y/prefers-reduced-motion.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/@magica11y/prefers-reduced-motion)
[![License](https://img.shields.io/github/license/magica11y/prefers-reduced-motion.svg?style=for-the-badge "MIT license")](LICENSE.md)
![Greenkeeper](https://badges.greenkeeper.io/magica11y/prefers-reduced-motion.svg?style=flat-square "Greenkeeper")

---

# :sparkles: Introduction

**Magica11y** provides a suite of functions to detect “user-preference” and “environment” media features.

**Magica11y** functions are awesome because…
  * They have **zero** dependencies
  * They’re **lightweight**; just [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@magica11y/prefers-reduced-motion.svg?style=flat-square&label "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=@magica11y/prefers-reduced-motion)
  * They use the **[`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)** API underneath
  * They’re optimized for **performance**; all the module functions are designed in such a way that they exit early
  * They provide a **clean**, **well-documented** and **semantic** API to work with

## :crystal_ball: Other Magica11y functions

In addition to :roller_coaster: `prefersReducedMotion()`, **Magica11y** also provides…

  * :candle: [`lightLevel()`](https://github.com/magica11y/light-level)
  * :tv: [`environmentBlending()`](https://github.com/magica11y/environment-blending)
  * :last_quarter_moon: [`invertedColors()`](https://github.com/magica11y/inverted-colors)
  * :gem: [`prefersReducedTransparency()`](https://github.com/magica11y/prefers-reduced-transparency)
  * :high_brightness: [`prefersContrast()`](https://github.com/magica11y/prefers-contrast)

---

# :musical_score: Documentation

## :game_die: Usage

```js
import prefersReducedMotion, { motionPreferences } from '@magica11y/prefers-reduced-motion';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

The `motionPreferences` object contains all the possible values supported by the `'prefers-reduce-motion'` media query…

* `motionPreferences.NO_PREFERENCE` (spec: [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference))
  > Indicates that the user has made no preference known to the system.
* `motionPreferences.REDUCE` (spec: [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce))
  > Indicates that user has notified the system that they prefer an interface that minimizes the amount of movement or animation,
  > preferably to the point where all non-essential movement is removed.
* `null`
  > The user’s preference could not be determined.

## :books: Further reading

* [Change Accessibility Display preferences on Mac — Apple Support](https://support.apple.com/guide/mac-help/unac089/mac)
* [Reduce screen motion on your iPhone, iPad, or iPod touch — Apple Support](https://support.apple.com/en-lamr/HT202655)

---

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

---

# :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with :heart: by [Rishabh Rao](https://github.com/rishabhsrao).

[![Twitter](https://img.shields.io/twitter/follow/rishabhsrao.svg?style=social)](https://twitter.com/rishabhsrao)

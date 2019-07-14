// @flow

import matchUserPreference from '@magica11y/cauldron';

import motionPreferences, { type MotionPreference } from './motionPreferences';

// See https://github.com/magica11y/magica11y/issues/1
const motionPreferenceValues: Array<MotionPreference> = [motionPreferences.NO_PREFERENCE, motionPreferences.REDUCE];

/**
 * Detects user’s preferences for reduced motion
 * using CSS3 Media Queries level 5 specification for `'prefers-reduce-motion'`.
 *
 * @returns Either 'no-preference', 'reduce' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion
 */
const prefersReducedMotion = (): ?MotionPreference => {
  const matchedMotionPreference: ?MotionPreference = motionPreferenceValues.find(
    (motionPreferenceValue: MotionPreference) => matchUserPreference('prefers-reduced-motion', motionPreferenceValue),
  );

  if (matchedMotionPreference) {
    return matchedMotionPreference;
  }

  return null;
};

export default prefersReducedMotion;

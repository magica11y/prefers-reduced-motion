// @flow

import { prefersReducedMotion, motionPreferences, type MotionPreference } from '../../src';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('prefersReducedMotion()', () => {
  it('returns a motion preference when media-query matches', () => {
    type TestParameter = {|
      testInput: MotionPreference,
      expectedOutput: MotionPreference,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: motionPreferences.REDUCE,
        expectedOutput: 'reduce',
      },
      {
        testInput: motionPreferences.NO_PREFERENCE,
        expectedOutput: 'no-preference',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(prefers-reduced-motion: ${testParameter.testInput})`));

      const motionPreference = prefersReducedMotion();

      expect(motionPreference).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const motionPreference = prefersReducedMotion();

    expect(motionPreference).toEqual(null);
  });
});

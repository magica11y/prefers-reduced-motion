// @flow

const motionPreferences: {|
  NO_PREFERENCE: string,
  REDUCE: string,
|} = Object.freeze({
  NO_PREFERENCE: 'no-preference',
  REDUCE: 'reduce',
});

export type MotionPreference = $Values<typeof motionPreferences>;

export default motionPreferences;

import { defineProperties } from '@vanilla-extract/sprinkles';
import { vtmnPreset } from './vtmn-preset';

type TwResponsiveBreakpoints = keyof typeof vtmnPreset.theme.screens;
type TwResponsiveBreakpointsMap = Record<
  TwResponsiveBreakpoints,
  { min?: string; max?: string }
>;

// https://github.com/seek-oss/vanilla-extract/blob/2b0abcd646cbbc8836301822c27c10f393870f4a/packages/sprinkles/src/index.ts
interface Condition {
  '@media'?: string;
  '@supports'?: string;
  selector?: string;
}

const twBreakpointsToAppBreakpoints = (
  breakpointsMap: TwResponsiveBreakpointsMap,
) =>
  Object.fromEntries(
    Object.entries(breakpointsMap).map(([key, { min, max }]) => [
      key,
      {
        '@media': [
          'screen',
          min ? `(min-width: ${min})` : '',
          max ? `(max-width: ${max})` : '',
        ]
          .filter(Boolean)
          .join(' and '),
      },
    ]),
  ) as Record<TwResponsiveBreakpoints, Condition>;

export const responsiveStyles = defineProperties({
  conditions: twBreakpointsToAppBreakpoints(vtmnPreset.theme.screens),
  defaultCondition: 'medium-desktop',
  responsiveArray: ['mobile', 'tablet', 'small-desktop', 'medium-desktop'],
  properties: {},
});

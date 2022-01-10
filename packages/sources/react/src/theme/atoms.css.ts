import { createSprinkles } from '@vanilla-extract/sprinkles';
import { unresponsiveProperties } from './base.css';
import { colorStyles } from './colors.css';
import { responsiveStyles } from './responsive.css';
import { spacingStyles } from './spacing.css';

export const atoms = createSprinkles(
  responsiveStyles,
  unresponsiveProperties,
  spacingStyles,
  colorStyles,
);

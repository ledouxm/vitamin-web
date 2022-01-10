import { defineProperties } from '@vanilla-extract/sprinkles';
import { vtmnPreset } from './vtmn-preset';

const spacing = vtmnPreset.theme.spacing as Record<
  | keyof typeof vtmnPreset.theme.spacing
  | `${keyof typeof vtmnPreset.theme.spacing}`,
  string
>;

export const spacingStyles = defineProperties({
  properties: {
    padding: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    margin: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    border: spacing,
    borderWidth: spacing,
    borderTop: spacing,
    borderBottom: spacing,
    borderLeft: spacing,
    borderRight: spacing,
  },
  shorthands: {
    mt: ['marginTop'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    pt: ['paddingTop'],
    pr: ['paddingRight'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    px: ['paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    py: ['paddingTop', 'paddingBottom'],
    b: ['border'],
    bw: ['borderWidth'],
    bx: ['borderLeft', 'borderRight'],
    by: ['borderTop', 'borderBottom'],
  },
});

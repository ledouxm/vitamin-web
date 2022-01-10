import { defineProperties } from '@vanilla-extract/sprinkles';
import tb from 'ts-toolbelt';
import { NonUndefined } from '../typings';
import { vtmnPreset } from './vtmn-preset';

const colors = mapTailwindColorsToTheme(vtmnPreset.theme.colors);
export const colorStyles = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors,
    backgroundColor: colors,
    border: colors,
    borderColor: colors,
  },
  shorthands: {
    bg: ['background'],
    bgColor: ['backgroundColor'],
  },
});

type TwThemeColors = typeof vtmnPreset.theme.colors;
type PossibleThemeColorKey = SimpleColors | PossibleColorWithVariants;

type AppThemeColorMap = {
  [P in keyof TwThemeColors[keyof TwThemeColors] as PossibleThemeColorKey]: string;
};

type SimpleColors = NonObjectKeys<TwThemeColors>;
type ColorsWithVariants = NonStringKeys<TwThemeColors>;

type ColorsMapWithTheirVariants = {
  [Prop in ColorsWithVariants]: Exclude<
    tb.Any.KnownKeys<TwThemeColors[Prop]>,
    'DEFAULT'
  >;
};
type ColorsMapWithTheirVariantsAndDefault = {
  [Color in tb.Any.Keys<ColorsMapWithTheirVariants>]:
    | `${Color}-${ColorsMapWithTheirVariants[Color]}`
    | Color;
};
type PossibleColorWithVariants =
  tb.Object.UnionOf<ColorsMapWithTheirVariantsAndDefault>;

const DefaultKey = 'DEFAULT';
// Inspired by https://github.com/kesne/vanilla-tailwind/blob/main/src/theme.css.ts
function twColorVariantsToRecordOfAppThemeColorKeys<
  T extends keyof ColorsMapWithTheirVariantsAndDefault,
>(name: T) {
  return Object.fromEntries(
    Object.entries(vtmnPreset.theme.colors[name]).map(([num, value]) => [
      num === DefaultKey ? name : `${name}-${num}`,
      value,
    ]),
  ) as Record<T, ColorsMapWithTheirVariantsAndDefault[T]>;
}

function mapTailwindColorsToTheme(themeColors: TwThemeColors) {
  const themeMap = {} as AppThemeColorMap;

  let key;
  for (key in themeColors) {
    if (typeof themeColors[key] === 'string') {
      themeMap[key] = themeColors[key] + ' !important';
    } else {
      const colorMap = twColorVariantsToRecordOfAppThemeColorKeys(
        key as keyof ColorsMapWithTheirVariantsAndDefault,
      );
      let colorVariant;
      for (colorVariant in colorMap) {
        themeMap[colorVariant] = colorMap[colorVariant] + ' !important';
      }
    }
  }

  return themeMap;
}

type NonObjectKeys<T extends object> = {
  [K in keyof T]-?: NonUndefined<T[K]> extends object ? never : K;
}[keyof T];
type NonStringKeys<T extends object> = {
  [K in keyof T]-?: NonUndefined<T[K]> extends string ? never : K;
}[keyof T];

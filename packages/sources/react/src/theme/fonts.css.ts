import { vtmnPreset } from './vtmn-preset';

export const fonts = {
  font: twFontFamiliesToAppFontFamilies(),
  // https://github.com/Decathlon/vitamin-web/blob/be5f39296dfaa2deb89e84f2823e10108fb037a2/packages/sources/css/src/design-tokens/src/typography.css#L24
  fontSize: {
    'display-1': 'var(--vtmn-typo_display-1-font-size)',
    'display-2': 'var(--vtmn-typo_display-2-font-size)',
    'title-1': 'var(--vtmn-title-1-font-size)',
    'title-2': 'var(--vtmn-title-2-font-size)',
    'title-3': 'var(--vtmn-title-3-font-size)',
    'title-4': 'var(--vtmn-title-4-font-size)',
    'title-5': 'var(--vtmn-title-5-font-size)',
    'text-1': 'var(--vtmn-text-1-font-size)',
    'text-2': 'var(--vtmn-text-2-font-size)',
    'text-3': 'var(--vtmn-text-3-font-size)',
  },
  // https://github.com/Decathlon/vitamin-web/blob/be5f39296dfaa2deb89e84f2823e10108fb037a2/packages/sources/css/src/design-tokens/src/typography.css#L15
  fontWeight: {
    normal: 'var(--vtmn-typo_font-weight--normal)',
    bold: 'var(--vtmn-typo_font-weight--bold)',
  },
};

function twFontFamiliesToAppFontFamilies() {
  return Object.fromEntries(
    Object.entries(vtmnPreset.theme.fontFamily).map(([key, value]) => [
      key,
      value.join(' '),
    ]),
  ) as Record<keyof typeof vtmnPreset.theme.screens, string>;
}

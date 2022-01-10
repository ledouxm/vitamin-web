import { defineProperties } from '@vanilla-extract/sprinkles';
import { fonts } from './fonts.css';

// https://github.com/Decathlon/vitamin-web/blob/be5f39296d/packages/sources/css/src/design-tokens/src/z-indexes.css
const vtmnZIndex = {
  tooltip: 'var(--vtmn-z-index_tooltip)',
  popover: 'var(--vtmn-z-index_popover)',
  toast: 'var(--vtmn-z-index_toast)',
  alert: 'var(--vtmn-z-index_alert)',
  modal: 'var(--vtmn-z-index_modal)',
};

// https://github.com/Decathlon/vitamin-web/blob/be5f39296d/packages/sources/css/src/design-tokens/src/shadows.css
const vtmnShadow = {
  100: 'var(--vtmn-shadow_100)',
  200: 'var(--vtmn-shadow_200)',
  300: 'var(--vtmn-shadow_300)',
  400: 'var(--vtmn-shadow_400)',
};

const absPos = ['auto', '-50%', '0%', '50%', '100%'];
const size = ['auto', '0%', '25%', '50%', '75%', '100%', '100vh', '100vw'];

export const unresponsiveProperties = defineProperties({
  properties: {
    fontSize: fonts.fontSize,
    fontWeight: fonts.fontWeight,
    zIndex: vtmnZIndex,
    boxShadow: vtmnShadow,
    textShadow: vtmnShadow,
    opacity: {
      '0': '0',
      disabled: 'var(--vtmn-opacity_disabled-state)',
      '1': '1',
    },
    position: ['absolute', 'relative', 'fixed', 'sticky'],
    display: ['none', 'flex', 'inline-flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    flexShrink: [0],
    flexGrow: [0, 1],
    flexWrap: ['wrap', 'nowrap', 'revert', 'wrap-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    top: absPos,
    bottom: absPos,
    left: absPos,
    right: absPos,
    inset: absPos,
    width: size,
    minWidth: size,
    height: size,
    minHeight: size,
    textAlign: ['inherit', 'left', 'center', 'right'],
    textTransform: ['inherit', 'uppercase', 'lowercase', 'capitalize'],
    cursor: ['inherit', 'pointer', 'not-allowed'],
    pointerEvents: ['inherit', 'all', 'none'],
    userSelect: ['inherit', 'none', 'text', 'all'],
  },
  // Inspired from https://chakra-ui.com/docs/features/style-props
  shorthands: {
    d: ['display'],
    p: ['position'],
    t: ['top'],
    b: ['bottom'],
    l: ['left'],
    r: ['right'],
    w: ['width'],
    h: ['height'],
    minH: ['minHeight'],
    flexDir: ['flexDirection'],
    wrap: ['flexWrap'],
    direction: ['flexDirection'],
    shrink: ['flexShrink'],
    grow: ['flexGrow'],
    align: ['alignItems'],
    justify: ['justifyContent'],
    placeItems: ['justifyContent', 'alignItems'],
    ta: ['textAlign'],
    tt: ['textTransform'],
    fs: ['fontSize'],
    fw: ['fontWeight'],
  },
});

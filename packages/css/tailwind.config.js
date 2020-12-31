module.exports = {
  prefix: 'vtmn-',
  purge: false,
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    screens: {
      tablet: 'var(--vtmn-breakpoint_tablet)',
      'small-desktop': 'var(--vtmn-breakpoint_small-desktop)',
      'medium-desktop': 'var(--vtmn-breakpoint_medium-desktop)',
      'large-desktop': 'var(--vtmn-breakpoint_large-desktop)',
    },
    colors: {
      'brand-digital': {
        'light-1': 'var(--vtmn-color_brand-digital-light-1)',
        'light-2': 'var(--vtmn-color_brand-digital-light-2)',
        'light-3': 'var(--vtmn-color_brand-digital-light-3)',
        DEFAULT: 'var(--vtmn-color_brand-digital)',
        'dark-1': 'var(--vtmn-color_brand-digital-dark-1)',
        'dark-2': 'var(--vtmn-color_brand-digital-dark-2)',
      },
      green: {
        'light-1': 'var(--vtmn-color_green-light-1)',
        'light-2': 'var(--vtmn-color_green-light-2)',
        'light-3': 'var(--vtmn-color_green-light-3)',
        DEFAULT: 'var(--vtmn-color_green)',
        'dark-1': 'var(--vtmn-color_green-dark-1)',
        'dark-2': 'var(--vtmn-color_green-dark-2)',
      },
      white: 'var(--vtmn-color_white)',
      grey: {
        'light-1': 'var(--vtmn-color_grey-light-1)',
        'light-2': 'var(--vtmn-color_grey-light-2)',
        'light-3': 'var(--vtmn-color_grey-light-3)',
        'light-4': 'var(--vtmn-color_grey-light-4)',
        DEFAULT: 'var(--vtmn-color_grey)',
        'dark-1': 'var(--vtmn-color_grey-dark-1)',
        'dark-2': 'var(--vtmn-color_grey-dark-2)',
        'dark-3': 'var(--vtmn-color_grey-dark-3)',
      },
      black: 'var(--vtmn-color_black)',
      success: 'var(--vtmn-color_success)',
      info: 'var(--vtmn-color_info)',
      warning: 'var(--vtmn-color_warning)',
      danger: 'var(--vtmn-color_danger)',
      yellow: {
        'light-1': 'var(--vtmn-color_yellow-light-1)',
        'light-2': 'var(--vtmn-color_yellow-light-2)',
        DEFAULT: 'var(--vtmn-color_yellow)',
      },
      orange: {
        'light-1': 'var(--vtmn-color_orange-light-1)',
        'light-2': 'var(--vtmn-color_orange-light-2)',
        DEFAULT: 'var(--vtmn-color_orange)',
      },
      red: {
        'light-1': 'var(--vtmn-color_red-light-1)',
        'light-2': 'var(--vtmn-color_red-light-2)',
        DEFAULT: 'var(--vtmn-color_red)',
      },
      transparent: 'var(--vtmn-color_transparent)',
    },
    spacing: {
      0: 'var(--vtmn-spacing_0)',
      1: 'var(--vtmn-spacing_1)',
      2: 'var(--vtmn-spacing_2)',
      3: 'var(--vtmn-spacing_3)',
      4: 'var(--vtmn-spacing_4)',
      5: 'var(--vtmn-spacing_5)',
      6: 'var(--vtmn-spacing_6)',
      7: 'var(--vtmn-spacing_7)',
      8: 'var(--vtmn-spacing_8)',
      9: 'var(--vtmn-spacing_9)',
      10: 'var(--vtmn-spacing_10)',
    },
    fontFamily: {
      display: ['Roboto Condensed', 'system-ui', '-apple-system'],
      body: ['Roboto', 'system-ui', '-apple-system'],
    },
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled', 'hover'],
      opacity: ['disabled', 'hover', 'active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

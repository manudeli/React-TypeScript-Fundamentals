import { create } from '@storybook/theming'

export default create({
  base: 'light',

  colorPrimary: 'rgba(0,0,0,0.15)',
  colorSecondary: 'rgba(0,0,0,0.15)',

  // UI
  appBg: 'white',
  appContentBg: '#fafafa',
  appBorderColor: 'rgba(0,0,0,0.05)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgba(0,0,0,0.6)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgba(0,0,0,0.4)',
  barSelectedColor: 'rgba(0,0,0,0.6)',
  barBg: 'rgba(0,0,0,0.05)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgba(0,0,0,0.1)',
  inputTextColor: 'rgba(0,0,0,0.6)',
  inputBorderRadius: 16,

  brandTitle: 'TouchFlow Design System',
  brandUrl: 'https://touchflow.io',
  brandImage:
    'https://play-lh.googleusercontent.com/xMlqde_clIToXBcW5Nbnm_sJ67jEHYDthdD6g28QtmVKn4lC40U1dA_44dWXOE6phvs=s40-rw',
})

// https://storybook.js.org/docs/react/configure/theming

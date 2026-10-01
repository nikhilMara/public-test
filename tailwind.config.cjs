const { HLTailwindConfig } = require('@gohighlevel/highrise')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  ...HLTailwindConfig,
  theme: {
    extend: {
      ...HLTailwindConfig.theme.extend,
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
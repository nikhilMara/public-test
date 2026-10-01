import ghlTailwindPrefixWrapper from '@gohighlevel/highrise/tailwind-prefix-wrapper'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [tailwindcss, autoprefixer, ghlTailwindPrefixWrapper({ prefix: '.testPublic' })],
}

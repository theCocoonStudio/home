/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require('autoprefixer'), require('postcss-modules-values')],
}

module.exports = config

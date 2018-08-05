const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
  // include plugins property
  plugins: base.plugins || []
})

module.exports = config

const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')

module.exports = function setupDevServer (app, onUpdate) {
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ]
  // push 2 plugins for hot module
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  const clientCompiler = webpack(clientConfig)
  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    }),
  )
  app.use(require('webpack-hot-middleware')(clientCompiler))
}

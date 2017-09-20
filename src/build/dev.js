const ora = require('ora')
const chalk = require('chalk')
const figures = require('figures')
const path = require('path')
const rm = require('rimraf')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.config.js')

var spinner = ora('building for development...')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

rm(resolve('dist'), err => {
  if (err) throw err
  startBuild()
})

/**
 * Begin webpack build progress
 */
function startBuild () {
  spinner.start()
  webpack(webpackConfig, onFinish)
}

/**
 * Webpack callback when the build finishes
 * @param err 
 * @param stats 
 */
function onFinish (err, stats) {
  spinner.stop()
  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan(figures.tick + ' Build complete.\n'))
  console.log(chalk.yellow(
    'Webpack is still watching for changes to the bundled files...\n'
  ))
}

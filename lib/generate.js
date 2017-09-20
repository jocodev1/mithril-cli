var async = require('async')
var Metalsmith = require('metalsmith')
var path = require('path')
var prompt = require('cli-prompt')
var render = require('consolidate').handlebars.render

module.exports = function (dest) {
  console.log('Generating custom Mithril scaffolding...')
  console.log()

  var metalsmith = Metalsmith(__dirname)
    .use(ask)
    .use(template)
    .clean(false)
    .source(path.resolve(__dirname, '../src'))
    .destination(dest)
    .build(function(err){
      if (err) throw err
    })
}

/**
 * Prompt plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function ask(files, metalsmith, done){
  var prompts = ['name', 'description', 'author']
  var metadata = metalsmith.metadata()

  async.eachSeries(prompts, run, done)

  function run(key, done){
    prompt('  ' + key + ': ', function(val){
      metadata[key] = val
      done()
    })
  }
}

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function template(files, metalsmith, done){
  var keys = Object.keys(files)
  var metadata = metalsmith.metadata()

  async.each(keys, run, done)

  function run(file, done){
    var str = files[file].contents.toString()
    render(str, metadata, function(err, res){
      if (err) return done(err)
      files[file].contents = new Buffer(res)
      done()
    })
  }
}
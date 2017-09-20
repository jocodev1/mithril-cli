#!/usr/bin/env node
const program = require('commander')

program
  .version('1.0.0')
  .usage('<command> [options]')
  .description('Collsf Framework\n\n    A command-line interface to help build the scaffolding for your next Mithril project.')
  .command('build [path]', 'Build the Mithril project scaffolding.')
  .parse(process.argv)

if (!program.args.length) program.help()

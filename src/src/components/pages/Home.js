import _ from 'lodash'
import m from 'mithril'
import Templates from '../templates/index.js'

export default class Home {
  constructor () {
    this.links = [
      {
        href: 'https://mithril.js.org/',
        text: 'Mithril Docs'
      },
      {
        href: 'https://github.com/jocodev1/mithril-cli',
        text: 'CLI Docs'
      },
      {
        href: 'http://milligram.io/',
        text: 'Milligram'
      }
    ]
  }

  view () {
    return Templates.default([
      m('h3', 'Welcome to your new Mithril app!'),
      m('p', 'By default, this project contains a webpack configuration to help bundle Mithril js files & SCSS for both development & production environments.'),
      m('h5', 'Links'),
      _.map(this.links, function (link) {
        return m('a', { href: link.href, target: '_blank' }, link.text)
      })
    ])
  }
}

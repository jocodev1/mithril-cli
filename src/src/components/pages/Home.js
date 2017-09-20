import m from 'mithril'
import Templates from '../templates/index.js'

export default class Home {
  view () {
    return Templates.default([
      m('h4', 'Welcome to your new Mithril app!'),
      m('p', 'By default, this project contains a webpack configuration to help bundle Mithril js files & SCSS for both development & production environments.')
    ])
  }
}

import m from 'mithril'
import Templates from '../templates/index.js'

export default class Next {
  view () {
    return Templates.default([
      m('h3', 'Next page'),
      m('p', 'Your application is also automatically setup as an SPA with these two basic routes.')
    ])
  }
}

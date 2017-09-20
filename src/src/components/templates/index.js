import m from 'mithril'

export default class Templates {
  static default (content) {
    return [
      m('#header', [
        m('h1', '{{ name }}'),
        m('.nav', [
          m('a', {href: "/", oncreate: m.route.link}, 'Default'),
          m('a', {href: "/next", oncreate: m.route.link}, 'Next Page')
        ])
      ]),
      m('#view', content)
    ]
  }
}


import m from 'mithril'

export default class Templates {
  /**
   * Generates the default view template with content inside
   * @param {array} content 
   */
  static default (content) {
    return [
      m('#header', [
        m('h1', '{{ name }}'),
        m('h6', '-- {{ description }}'),
        m('.nav', [
          this.buildRouteButton('/', 'Home'),
          this.buildRouteButton('/next', 'Next Page')
        ]),
        m('hr')
      ]),
      m('#view', content)
    ]
  }
  
  /**
   * Builds route button element
   * @param {string} route 
   * @param {string} text 
   */
  static buildRouteButton (route, text) {
    return m('a', {
      class: this.isCurrentRoute(route)
        ? 'button'
        : 'button button-outline',
      href: route,
      oncreate: m.route.link
    }, text)
  }

  /**
   * Determines if the given route is current
   * @param {string} route 
   */
  static isCurrentRoute (route) {
    return m.route.get() === route
  }
}

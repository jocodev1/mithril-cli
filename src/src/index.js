import m from 'mithril'
import Home from './components/pages/Home.js'
import Next from './components/pages/Next.js'
import './assets/scss/app.scss'

m.route(document.body, '/', {
  '/': Home,
  '/next': Next
})

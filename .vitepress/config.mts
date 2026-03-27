import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ODE4EC",
  description: "This is the central website for projects under the ODE4EC umbrella.",
  themeConfig: {
    logo: '/img/ode4ec-logo.svg',


    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/news/' },
      { text: 'Events', link: '/events/' },
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fossi-foundation/ode4ec.eu.git' }
    ],

    footer: {
      message: '&copy; the authors and project partners of ODE4EC projects. Hosted by the <a href="https://www.fossi-foundation.org">FOSSi Foundation</a>.'
    }
  }
})

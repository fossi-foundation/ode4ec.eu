import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function getSidebarItems(subdir: string) {
  const dirPath = resolve(__dirname, '..', subdir)
  const files = readdirSync(dirPath)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse()

  return files.map(file => {
    const content = readFileSync(resolve(dirPath, file), 'utf-8')
    const titleMatch = content.match(/^title:\s*(.+)$/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '')
    return { text: title, link: `/${subdir}/${file.replace('.md', '')}` }
  })
}

const topLevel = [
  { text: 'About', link: '/about', items: [] },
  { text: 'Advocacy', link: '/advocacy', items: [] },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ODE4EC",
  description: "This is the central website for projects under the ODE4EC umbrella.",
  themeConfig: {
    logo: '/img/ode4ec-logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Advocacy', link: '/advocacy/' },
      { text: 'News', link: '/news/' },
      { text: 'Events', link: '/events/' },
    ],

    sidebar: {
      '/about': [
        ...topLevel,
        { text: 'News', link: '/news/', items: [] },
        { text: 'Events', link: '/events/', items: [] },
      ],
      '/advocacy': [
        ...topLevel,
        { text: 'News', link: '/news/', items: [] },
        { text: 'Events', link: '/events/', items: [] },
      ],
      '/news/': [
        ...topLevel,
        { text: 'News', link: '/news/', items: getSidebarItems('news/posts') },
        { text: 'Events', link: '/events/', items: [] },
      ],
      '/events/': [
        ...topLevel,
        { text: 'News', link: '/news/', items: [] },
        { text: 'Events', link: '/events/', items: getSidebarItems('events/posts') },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fossi-foundation/ode4ec.eu.git' }
    ],

    footer: {
      message: '&copy; the authors and project partners of ODE4EC projects. Hosted by the <a href="https://www.fossi-foundation.org">FOSSi Foundation</a>.'
    }
  }
})

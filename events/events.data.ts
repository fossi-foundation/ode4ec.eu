import { createContentLoader } from 'vitepress'

export interface Event {
  title: string
  url: string
  date: string
  location?: string
  upcoming: boolean
}

export interface EventsData {
  upcoming: Event[]
  past: Event[]
}

declare const data: EventsData
export { data }

export default createContentLoader('events/posts/*.md', {
  transform(rawData): EventsData {
    const today = new Date().toISOString().slice(0, 10)

    const events: Event[] = rawData
      .map(page => ({
        title: page.frontmatter.title ?? page.url,
        url: page.url,
        date: page.frontmatter.date
          ? new Date(page.frontmatter.date).toISOString().slice(0, 10)
          : '',
        location: page.frontmatter.location,
        upcoming: page.frontmatter.date
          ? new Date(page.frontmatter.date).toISOString().slice(0, 10) >= today
          : false,
      }))
      .sort((a, b) => (a.date > b.date ? 1 : -1))

    return {
      upcoming: events.filter(e => e.upcoming),
      past: events.filter(e => !e.upcoming).reverse(),
    }
  }
})

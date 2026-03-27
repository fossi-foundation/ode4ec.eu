// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import NewsPreview from './NewsPreview.vue'
import EventsPreview from './EventsPreview.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('NewsPreview', NewsPreview)
    app.component('EventsPreview', EventsPreview)
  }
} satisfies Theme

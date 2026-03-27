<script setup>
import { data as posts } from './posts.data.ts'
</script>

# News & Updates

Stay up to date with the latest developments from the ODE4EC project.

<div v-for="post in posts" :key="post.url" class="post-entry">
  <span class="date">{{ post.date }}</span>
  <a :href="post.url">{{ post.title }}</a>
</div>

<style scoped>
.post-entry {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.date {
  color: var(--vp-c-text-2);
  white-space: nowrap;
  font-size: 0.9rem;
}
</style>

<script setup lang="ts">
import { data as posts } from '../../news/posts.data.ts'
</script>

<template>
  <div class="news-preview">
    <h2>News & Updates</h2>
    <ul>
      <li v-for="post in posts.slice(0, 5)" :key="post.url">
        <span class="date">{{ post.date }}</span>
        <a :href="post.url">{{ post.title }}</a>
      </li>
    </ul>
    <a href="/news/" class="all-news">All news →</a>
  </div>
</template>

<style scoped>
.news-preview {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 16px;
}

.news-preview h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 2rem;
}

.news-preview ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.news-preview li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 1rem;
}

.date {
  color: var(--vp-c-text-2);
  white-space: nowrap;
  font-size: 0.9rem;
}

.all-news {
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
}
</style>

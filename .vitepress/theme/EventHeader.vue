<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="event-header">
    <h1>{{ frontmatter.title }}</h1>
    <p class="event-meta">
      <span v-if="frontmatter.date">{{ frontmatter.date }}</span>
      <span v-if="frontmatter.location"> · {{ frontmatter.location }}</span>
    </p>
  </div>
</template>

<style scoped>
.event-header {
  margin-bottom: 2rem;
}
.event-meta {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: -1rem;
}
</style>

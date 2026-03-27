<script setup lang="ts">
import { data } from '../../events/events.data.ts'
</script>

<template>
  <div class="events-preview">
    <h2>Upcoming Events</h2>

    <template v-if="data.upcoming.length">
      <ul>
        <li v-for="event in data.upcoming" :key="event.url">
          <span class="date">{{ event.date }}</span>
          <span>
            <a :href="event.url">{{ event.title }}</a>
            <span v-if="event.location" class="location"> · {{ event.location }}</span>
          </span>
        </li>
      </ul>
    </template>

    <a href="/events/" class="all-link">All events →</a>
  </div>
</template>

<style scoped>
.events-preview {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

.events-preview h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 2rem;
}

.events-preview h3 {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 1rem 0 0.5rem;
}

.events-preview ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.events-preview li {
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

.location {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.all-link {
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
}
</style>

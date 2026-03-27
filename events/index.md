<script setup>
import { data } from './events.data.ts'
</script>

# Events

## Upcoming

<template v-if="data.upcoming.length">
  <div v-for="event in data.upcoming" :key="event.url" class="event-entry">
    <a :href="event.url"><strong>{{ event.title }}</strong></a><br/>
    <span class="meta">{{ event.date }}<span v-if="event.location"> · {{ event.location }}</span></span>
  </div>
</template>
<template v-else>

*No upcoming events at this time.*

</template>

## Past Events

<div v-for="event in data.past" :key="event.url" class="event-entry">
  <a :href="event.url">{{ event.title }}</a><br/>
  <span class="meta">{{ event.date }}<span v-if="event.location"> · {{ event.location }}</span></span>
</div>

<style scoped>
.event-entry { margin-bottom: 1rem; }
.meta { color: var(--vp-c-text-2); font-size: 0.9rem; }
</style>

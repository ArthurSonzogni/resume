<script setup lang="ts">

import humanizeDuration from 'humanize-duration'

const props = defineProps<{
  title: string;
  endDate: Date;
  startDate: Date;
  displayDuration?: boolean;
}>()

const startDateSimple = computed(() => {
  return props.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})

const endDateSimple = computed(() => {
  // If the end date is close to "today", we display "present" instead of the date.
  if (props.endDate > new Date() && props.endDate - new Date() < 1000 * 60 * 60 * 24 * 30) {
    return 'Present'
  }

  return props.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})

const duration = computed(() => {
  return humanizeDuration(props.endDate - props.startDate, { largest: 1 })
})

</script>


<template>
  <div class="sub_element">
    <div class="title">
      {{ title }}
    </div>
    <div class="date">
      {{ startDateSimple }} - {{ endDateSimple }}
      <span v-if="props.displayDuration">
        - {{ duration }}
      </span>
    </div>
  </div>
</template>


<style scoped>

.sub_element {
  margin: 10px 0;
  margin-bottom: 10px;
}

.title {
  font-weight: bold;
  color: #444;
}

.date {
  font-style: italic;
  font-size: 0.8em;
  color: #666;
}

</style>

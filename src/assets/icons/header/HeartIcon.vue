<script setup>
defineProps({
  stroke: {
    type: String,
    required: true
  }
})
</script>

<template>
  <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M19.5991 5.06844C15.8805 0.73481 9.66669 -0.604468 5.00754 3.36383C0.34837 7.33213 -0.307578 13.9669 3.35129 18.6603C6.3934 22.5623 15.5999 30.7924 18.6173 33.4562C18.9547 33.7542 19.1236 33.9032 19.3205 33.9617C19.4922 34.0128 19.6803 34.0128 19.8522 33.9617C20.0492 33.9032 20.2178 33.7542 20.5555 33.4562C23.5729 30.7924 32.7792 22.5623 35.8214 18.6603C39.4803 13.9669 38.9043 7.29039 34.1651 3.36383C29.4258 -0.562724 23.3177 0.73481 19.5991 5.06844Z"
          :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<script setup>
defineProps({
  fill: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M13.3994 3.71229C10.9203 0.823206 6.7778 -0.0696455 3.6717 2.57589C0.56558 5.22142 0.128281 9.64458 2.56753 12.7735C4.5956 15.3749 10.7332 20.8616 12.7448 22.6375C12.9698 22.8362 13.0824 22.9355 13.2137 22.9745C13.3282 23.0085 13.4535 23.0085 13.5682 22.9745C13.6995 22.9355 13.8119 22.8362 14.037 22.6375C16.0486 20.8616 22.1861 15.3749 24.2143 12.7735C26.6535 9.64458 26.2695 5.19359 23.11 2.57589C19.9505 -0.0418157 15.8784 0.823206 13.3994 3.71229Z"
          :stroke="fill" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<template>
    <circle :cx="props.cx" :cy="props.cy" :r="props.r" :fill="props.fill" />
</template>
<script setup lang="ts">
const props = defineProps({
  cx: { type: Number, required: true },
  cy: { type: Number, required: true },
  r: { type: Number, required: true },
  fill: { type: String, required: true },
})

</script>

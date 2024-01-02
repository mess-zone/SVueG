<template>
    <line
        :x1="props.x1"
        :y1="props.y1"
        :x2="props.x2"
        :y2="props.y2"
        :stroke="props.stroke"
        :stroke-width="props.strokeWidth"
    />
</template>
<script setup lang="ts">
const props = defineProps({
    x1: { type: Number, required: true },
    y1: { type: Number, required: true },
    x2: { type: Number, required: true },
    y2: { type: Number, required: true },
    stroke: { type: String, required: true },
    strokeWidth: { type: Number, required: true },
});
</script>

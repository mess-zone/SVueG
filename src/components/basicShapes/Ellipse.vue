<template>
    <ellipse
        :cx="props.cx"
        :cy="props.cy"
        :rx="props.rx"
        :ry="props.ry"
        :stroke="props.stroke"
        :fill="props.fill"
        :stroke-width="props.strokeWidth"
    />
</template>
<script setup lang="ts">
const props = defineProps({
    cx: { type: Number, required: true },
    cy: { type: Number, required: true },
    rx: { type: Number, required: true },
    ry: { type: Number, required: true },
    stroke: { type: String, required: true },
    fill: { type: String, required: true },
    strokeWidth: { type: Number, required: true },
});
</script>

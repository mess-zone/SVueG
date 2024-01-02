<template>
    <rect
        :x="props.x"
        :y="props.y"
        :rx="props.rx"
        :ry="props.ry"
        :width="props.width"
        :height="props.height"
        :stroke="props.stroke"
        :fill="props.fill"
        :stroke-width="props.strokeWidth"
    />
</template>
<script setup lang="ts">
const props = defineProps({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    rx: { type: Number, required: true },
    ry: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    stroke: { type: String, required: true },
    fill: { type: String, required: true },
    strokeWidth: { type: Number, required: true },
});
</script>

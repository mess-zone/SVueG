<template>
    <line
        :data-node-id="shape.id"
        :x1="shape.start.x"
        :y1="shape.start.y"
        :x2="shape.end.x"
        :y2="shape.end.y"
        :stroke="shape.stroke"
        :stroke-width="shape.strokeWidth"
    />
</template>
<script setup lang="ts">
import { type LineShape } from '@/types'

interface Props {
    shape: LineShape,
}

const { shape } = defineProps<Props>();
</script>

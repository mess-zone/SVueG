<template>
    <polygon
        :points="stringPoints"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
    />
</template>
<script setup lang="ts">
import { type PolygonShape } from '@/types'
import { computed } from 'vue';

interface Props {
    shape: PolygonShape,
}

const { shape } = defineProps<Props>();

const stringPoints = computed(() => {
    return shape.points.map(point => `${point.x}, ${point.y}`).join(' ')
})
</script>

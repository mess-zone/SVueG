<template>
    <polygon
        :data-node-id="shape.id"
        :points="stringPoints"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation.angle}, ${origin.x}, ${origin.y})`"
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

const origin = computed(() => {
  return {
    x: shape.rotation.origin?.x || 0,
    y: shape.rotation.origin?.y || 0,
  }
})

</script>

<template>
    <circle
        :data-node-id="shape.id"
        :cx="shape.center.x"
        :cy="shape.center.y"
        :r="shape.radius"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation.angle}, ${origin.x}, ${origin.y})`"
    />
</template>
<script setup lang="ts">
import type { CircleShape } from '@/types';
import { computed } from 'vue';

interface Props {
  shape: CircleShape,
}

const { shape } = defineProps<Props>();

const origin = computed(() => {
  return {
    x: shape.rotation.origin?.x || shape.center.x,
    y: shape.rotation.origin?.y || shape.center.y,
  }
})
</script>

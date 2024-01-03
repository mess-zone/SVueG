<template>
    <circle
        :data-node-id="shape.id"
        :cx="shape.center.x"
        :cy="shape.center.y"
        :r="shape.radius"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
    />
</template>
<script setup lang="ts">
import type { CircleShape } from '@/types';

interface Props {
  shape: CircleShape,
}

const { shape } = defineProps<Props>();
</script>

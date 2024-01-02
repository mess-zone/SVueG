<template>
    <ellipse
        :cx="shape.center.x"
        :cy="shape.center.y"
        :rx="shape.radius.x"
        :ry="shape.radius.y"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
    />
</template>
<script setup lang="ts">
import type { EllipseShape } from '@/types';

interface Props {
  shape: EllipseShape,
}

const { shape } = defineProps<Props>();
</script>

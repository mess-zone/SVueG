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
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { CircleShape, NodeShapeI } from '@/types';
import { ref } from 'vue';

interface Props {
  shape: CircleShape,
}

const { shape } = defineProps<Props>();

const node = ref(shape as NodeShapeI);

const { origin } = useSVGBounding(node)
</script>

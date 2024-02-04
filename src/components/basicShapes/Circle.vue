<template>
    <circle
        :data-node-id="shape.id"
        :cx="shape.center.x"
        :cy="shape.center.y"
        :r="shape.radius"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation})`"
        style="transform-box: fill-box; transform-origin: 50% 50%"
    />
</template>
<script setup lang="ts">
import type { CircleShapeObj } from "@/factories/CircleShapeFactory";
import type { NodeShapeI } from '@/types';
import { ref } from 'vue';

interface Props {
  node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as CircleShapeObj);

</script>

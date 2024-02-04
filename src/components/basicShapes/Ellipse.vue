<template>
    <ellipse
        :data-node-id="shape.id"
        :cx="shape.center.x"
        :cy="shape.center.y"
        :rx="shape.radius.x"
        :ry="shape.radius.y"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation})`"
        style="transform-box: fill-box; transform-origin: 50% 50%"
    />
</template>
<script setup lang="ts">
import type { EllipseShapeObj } from "@/factories/EllipseShapeFactory";
import type { NodeShapeI } from '@/types';
import { ref } from 'vue';

interface Props {
  node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as EllipseShapeObj);

</script>

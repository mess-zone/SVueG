<template>
    <line
        :data-node-id="shape.id"
        :x1="shape.start.x"
        :y1="shape.start.y"
        :x2="shape.end.x"
        :y2="shape.end.y"
        :stroke="shape.stroke"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation.angle})`"
        style="transform-box: fill-box; transform-origin: 50% 50%"
    />
</template>
<script setup lang="ts">
import type { LineShapeObj } from "@/factories/LineShapeFactory";
import { type NodeShapeI } from '@/types'
import { ref } from 'vue';

interface Props {
    node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as LineShapeObj);

</script>

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
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { PolygonShapeObj } from "@/factories/PolygonShapeFactory";
import { type NodeShapeI } from '@/types'
import { computed, ref } from 'vue';

interface Props {
    node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as PolygonShapeObj);

const stringPoints = computed(() => {
    return shape.value.points.map(point => `${point.x}, ${point.y}`).join(' ')
})

const { origin } = useSVGBounding(shape)

</script>

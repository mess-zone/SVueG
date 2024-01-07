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
import { type NodeShapeI, type PolygonShape } from '@/types'
import { computed, ref } from 'vue';

interface Props {
    shape: PolygonShape,
}

const { shape } = defineProps<Props>();

const stringPoints = computed(() => {
    return shape.points.map(point => `${point.x}, ${point.y}`).join(' ')
})

const node = ref(shape as NodeShapeI);

const { origin } = useSVGBounding(node)

</script>

<template>
    <rect
        :data-node-id="shape.id"
        :x="shape.topLeft.x"
        :y="shape.topLeft.y"
        :rx="shape.round.x"
        :ry="shape.round.y"
        :width="shape.size.x"
        :height="shape.size.y"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation.angle}, ${origin.x}, ${origin.y})`"
    />
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import { type NodeShapeI, type RectShape } from "@/types";
import { ref } from "vue";

interface Props {
  node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as RectShape);

const { origin } = useSVGBounding(shape)

</script>

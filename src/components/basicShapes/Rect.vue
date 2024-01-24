<template>
    <rect
        :data-node-id="shape.id"
        :x="shape.x"
        :y="shape.y"
        :rx="shape.round.x"
        :ry="shape.round.y"
        :width="shape.width"
        :height="shape.height"
        :stroke="shape.stroke"
        :fill="shape.fill"
        :stroke-width="shape.strokeWidth"
        :transform="`rotate(${shape.rotation.angle}, ${origin.x}, ${origin.y})`"
    />
</template>
<script setup lang="ts">
import { useSVGBounding } from "@/composables/useSVGBounding";
import type { RectShapeObj } from "@/factories/RectShapeFactory";
import { type NodeShapeI } from "@/types";
import { ref } from "vue";

interface Props {
  node: NodeShapeI,
}

const { node } = defineProps<Props>();

const shape = ref(node as RectShapeObj);

const { origin } = useSVGBounding(shape)

</script>

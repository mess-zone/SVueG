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
import { computed, ref } from "vue";

interface Props {
  shape: RectShape,
}

const { shape } = defineProps<Props>();

const node = ref(shape as NodeShapeI);

const { center } = useSVGBounding(node)

const origin = computed(() => {
  return {
    x: shape.rotation.origin.x == 'auto' ? center.value.x : shape.rotation.origin.x,
    y: shape.rotation.origin.y == 'auto' ? center.value.y : shape.rotation.origin.y,
  }
})
</script>

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
        :transform="`rotate(${shape.rotation.angle}, ${shape.rotation.origin.x}, ${shape.rotation.origin.y})`"
    />
</template>
<script setup lang="ts">
import { type RectShape } from "@/types";
import { computed } from "vue";

interface Props {
  shape: RectShape,
}

const { shape } = defineProps<Props>();

const origin = computed(() => {
  return {
    x: shape.rotation.origin.x || shape.topLeft.x + (shape.size.x)/2,
    y: shape.rotation.origin.y || shape.topLeft.y + (shape.size.y)/2,
  }
})
</script>

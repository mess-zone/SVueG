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
    />
</template>
<script setup lang="ts">
import { type RectShape } from "@/types";

interface Props {
  shape: RectShape,
}

const { shape } = defineProps<Props>();
</script>

<template>
    <rect
        :x="props.shape.point.x"
        :y="props.shape.point.y"
        :rx="props.shape.round.x"
        :ry="props.shape.round.y"
        :width="props.shape.size.x"
        :height="props.shape.size.y"
        :stroke="props.shape.stroke"
        :fill="props.shape.fill"
        :stroke-width="props.shape.strokeWidth"
    />
</template>
<script setup lang="ts">
import { type RectShape } from "@/types";

interface Props {
  shape: RectShape,
}

const props = defineProps<Props>();
</script>

<template>
    <Rect :shape="shape" />
    <Circle :shape="topLeft" />
    <Circle :shape="topRight" />
    <Circle :shape="bottomLeft" />
    <Circle :shape="bottomRight" />
</template>
<script setup lang="ts">
import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { type RectShape } from "@/types";
import { type CircleShape } from "@/types";

interface Props {
  shape: RectShape,
}

const { shape } = defineProps<Props>();

const topLeft: CircleShape = {
  center: {
    x: shape.topLeft.x,
    y: shape.topLeft.y,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}

const topRight: CircleShape = {
  center: {
    x: shape.topLeft.x + shape.size.x,
    y: shape.topLeft.y,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}

const bottomLeft: CircleShape = {
  center: {
    x: shape.topLeft.x,
    y: shape.topLeft.y + shape.size.y,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}

const bottomRight: CircleShape = {
  center: {
    x: shape.topLeft.x + shape.size.x,
    y: shape.topLeft.y + shape.size.y,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}
</script>

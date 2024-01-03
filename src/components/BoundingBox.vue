<template>
  <g>
    <Rect :shape="rectShape" />
    <Circle :shape="topLeft" />
    <Circle :shape="topRight" />
    <Circle :shape="bottomLeft" />
    <Circle :shape="bottomRight" />
  </g>
</template>
<script setup lang="ts">
import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { type RectShape } from "@/types";
import { type CircleShape } from "@/types";

interface Props {
  box: DOMRect,
}

const { box } = defineProps<Props>();

const rectShape: RectShape = {
    id: 'asuasuudsuad53454545',
    tag: "Rect",
    topLeft: { x: box.x, y: box.y },
    size: { x: box.width, y: box.height },
    round: { x: 0, y: 0 },
    stroke: "blue",
    fill: "transparent",
    strokeWidth: 2,
};

const topLeft: CircleShape = {
  id: 'asuasuudsuad',
  tag: 'Circle',
  center: {
    x: box.x,
    y: box.y,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}

const topRight: CircleShape = {
  id: 'asuasuudsuad2',
  tag: 'Circle',
  center: {
    x: box.x + box.width,
    y: box.y,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}

const bottomLeft: CircleShape = {
  id: 'asuasuudsuad2',
  tag: 'Circle',
  center: {
    x: box.x,
    y: box.y + box.height,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}

const bottomRight: CircleShape = {
  id: 'asuasuudsuad2',
  tag: 'Circle',
  center: {
    x: box.x + box.width,
    y: box.y + box.height,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}
</script>

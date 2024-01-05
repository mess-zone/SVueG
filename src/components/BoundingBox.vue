<template>
  <g v-if="selectedNode">
    <Rect :shape="rectShape" />
    <Circle :shape="topLeft" />
    <Circle :shape="topRight" />
    <Circle :shape="bottomLeft" />
    <Circle :shape="bottomRight" />
  </g>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

import { useNodeListStore } from '../stores/nodeListStore'
import { storeToRefs } from 'pinia'

import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { createRectShape } from "@/factories/RectShapeFactory";
import { createCircleShape } from "@/factories/CircleShapeFactory";

import type { BoundingBoxType, RectShape, CircleShape } from "@/types";

const nodeStore =  useNodeListStore()
const { selectedNode } = storeToRefs(nodeStore)
const { getBoundingBox } = nodeStore

const selectedBoundingBox = ref<BoundingBoxType>()


const rectShape = ref<RectShape>(createRectShape({
    topLeft: { x: 0, y: 0 },
    size: { x: 0, y: 0 },
    round: { x: 0, y: 0 },
    stroke: "blue",
    fill: "transparent",
    strokeWidth: 2,
}))

const topLeft = ref<CircleShape>(createCircleShape({
  center: {
    x: 0,
    y: 0,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}))

const topRight = ref<CircleShape>(createCircleShape({
  center: {
    x: 0,
    y: 0,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}))

const bottomLeft = ref<CircleShape>(createCircleShape({
  center: {
    x: 0,
    y: 0,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}))

const bottomRight = ref<CircleShape>(createCircleShape({
  center: {
    x: 0,
    y: 0,
  },
  radius: 4,
  fill: "blue",
  stroke: "",
  strokeWidth: 0
}))

watch(selectedNode, (node) => {
  selectedBoundingBox.value = getBoundingBox(node)

  if(selectedBoundingBox.value) {
    rectShape.value.topLeft = { x: selectedBoundingBox.value.x, y: selectedBoundingBox.value.y };
    rectShape.value.size = { x: selectedBoundingBox.value.width, y: selectedBoundingBox.value.height };

    topLeft.value.center = { x: selectedBoundingBox.value.x, y: selectedBoundingBox.value.y }
    topRight.value.center = { x: selectedBoundingBox.value.x + selectedBoundingBox.value.width, y: selectedBoundingBox.value.y }
    
    bottomLeft.value.center = { x: selectedBoundingBox.value.x, y: selectedBoundingBox.value.y + selectedBoundingBox.value.height }
    bottomRight.value.center = { x: selectedBoundingBox.value.x + selectedBoundingBox.value.width, y: selectedBoundingBox.value.y + selectedBoundingBox.value.height }
  }
}, { deep: true })

</script>

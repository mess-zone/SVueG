<template>
    <g v-if="hoveredNode">
        <!-- <Rect :node="rectShape" /> -->
        <Polygon :node="polygonShape" />
    </g>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { useNodeListStore } from "../stores/nodeListStore";
import { useCanvasStore } from "@/stores/canvasStore";
import { storeToRefs } from "pinia";

import Rect from "./basicShapes/Rect.vue";
import Polygon from "./basicShapes/Polygon.vue";

import { RectShapeObj, createRectShape } from "@/factories/RectShapeFactory";

import { getBoundingPoly } from '../helpers/math.js'

import type { NodeShapeI, Point, ShapeStyle } from "@/types";
import { PolygonShapeObj, createPolygonShape } from "@/factories/PolygonShapeFactory";

const canvasStore = useCanvasStore()
const { toAbsolute } = canvasStore

const nodeStore = useNodeListStore();
const { hoveredNode } =
    storeToRefs(nodeStore);

// const rectShape = ref<RectShapeObj>(
//     createRectShape({
//         topLeft: { x: 0, y: 0 },
//         size: { x: 0, y: 0 },
//         round: { x: 0, y: 0 },
//         rotation: { angle: 0, origin: { x: 0, y: 0 } },
//         stroke: "transparent",
//         fill: "#00ffff54",
//         strokeWidth: 0,
//     })
// );

const polygonShape = ref<PolygonShapeObj>(
    createPolygonShape({
        points: [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
        ],
        rotation: 0,
        stroke: "transparent",
        strokeWidth: 0,
        fill: "#00ffff54",
    })
)

watchEffect(() => {
    const shapeStyle = hoveredNode.value as unknown as ShapeStyle
    const bb = hoveredNode.value?.boundingBox

    if(bb && shapeStyle) {
        const points = getBoundingPoly(bb, shapeStyle.rotation || 0)

        polygonShape.value.points = points.map(relativePoint => toAbsolute(relativePoint))
    }

});
</script>

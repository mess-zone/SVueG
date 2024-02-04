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

function degreesToRad(degrees: number) {
    return degrees * Math.PI / 180.0
}

function rotate(point: Point, angle: number) {
    const rad = degreesToRad(angle)
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)

    return {
        x: (point.x * cos) + (point.y * sin),
        y: -(point.y * cos) + (point.x * sin),
    }
}

watchEffect(() => {
    const shapeStyle = hoveredNode.value as unknown as ShapeStyle
    const bb = hoveredNode.value?.boundingBox

    if(bb && shapeStyle) {
            const nodeRotationAngle = shapeStyle.rotation || 0;

            const tl = toAbsolute(rotate({
                x: bb.x,
                y: bb.y,
            }, nodeRotationAngle))

            const tr = toAbsolute(rotate({
                x: bb.x + bb.width,
                y: bb.y,
            }, nodeRotationAngle))

            const bl = toAbsolute(rotate({
                x: bb.x,
                y: bb.y + bb.height,
            }, nodeRotationAngle))
    
            const br = toAbsolute(rotate({
                x: bb.x + bb.width,
                y: bb.y + bb.height,
            }, nodeRotationAngle))

            // rectShape.value.x =  tl.x
            // rectShape.value.y = tl.y

            // rectShape.value.width =  br.x - tl.x
            // rectShape.value.height = br.y - tl.y
  
            // // rectShape.value.rotation.origin = selectedOrigin.value
            // rectShape.value.rotation.angle = nodeRotationAngle;


            polygonShape.value.points = [ tl, tr, br, bl ]
    }

});
</script>

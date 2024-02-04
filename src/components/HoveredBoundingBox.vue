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

function invert(point: Point) {
    return {
        x: -point.x,
        y: -point.y,
    }
}

function translate(point: Point, delta: Point) {
    return {
        x: point.x + delta.x,
        y: point.y + delta.y,
    }
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

function rotateToOrigin(point: Point, origin: Point, angle: number) {
    const translated = translate(point, invert(origin))
    const rotated = rotate(translated, angle)
    const detranslated = translate(rotated, origin)

    return detranslated
} 

watchEffect(() => {
    const shapeStyle = hoveredNode.value as unknown as ShapeStyle
    const bb = hoveredNode.value?.boundingBox

    
    if(bb && shapeStyle) {
        const nodeRotationAngle = shapeStyle.rotation || 0;

        const shapeCenter = {
            x: bb.width/2 + bb.x,
            y: bb.height/2 + bb.y,
        }

        const tl = toAbsolute(rotateToOrigin({
            x: bb.x,
            y: bb.y,
        }, shapeCenter, nodeRotationAngle))

        const tr = toAbsolute(rotateToOrigin({
            x: bb.x + bb.width,
            y: bb.y,
        }, shapeCenter, nodeRotationAngle))

        const bl = toAbsolute(rotateToOrigin({
            x: bb.x,
            y: bb.y + bb.height,
        }, shapeCenter, nodeRotationAngle))


        const br = toAbsolute(rotateToOrigin({
            x: bb.x + bb.width,
            y: bb.y + bb.height,
        }, shapeCenter, nodeRotationAngle))

            // const tl = toAbsolute(rotate({
            //     x: bb.x,
            //     y: bb.y,
            // }, nodeRotationAngle))

            // const tr = toAbsolute(rotate({
            //     x: bb.x + bb.width,
            //     y: bb.y,
            // }, nodeRotationAngle))

            // const bl = toAbsolute(rotate({
            //     x: bb.x,
            //     y: bb.y + bb.height,
            // }, nodeRotationAngle))
    
            // const br = toAbsolute(rotate({
            //     x: bb.x + bb.width,
            //     y: bb.y + bb.height,
            // }, nodeRotationAngle))





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

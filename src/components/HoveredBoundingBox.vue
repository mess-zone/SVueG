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

import type { NodeShapeI, ShapeStyle } from "@/types";
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
        rotation: { angle: 0, origin: { x: 'auto' , y: 'auto' } },
        stroke: "transparent",
        strokeWidth: 0,
        fill: "#00ffff54",
    })
)


watchEffect(() => {
    const shapeStyle = hoveredNode.value as unknown as ShapeStyle
    const bb = hoveredNode.value?.boundingBox

    if(bb && shapeStyle) {
            const nodeRotationAngle = shapeStyle.rotation.angle || 0;

            const tl = toAbsolute({
                x: bb.x,
                y: bb.y,
            })

            const tr = toAbsolute({
                x: bb.x + bb.width,
                y: bb.y,
            })

            const bl = toAbsolute({
                x: bb.x,
                y: bb.y + bb.height,
            })
    
            const br = toAbsolute({
                x: bb.x + bb.width,
                y: bb.y + bb.height,
            })

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

<template>
    <g v-if="selectedNode">
        <Rect :node="rectShape" />
        <Circle :node="topLeft" />
        <Circle :node="topRight" />
        <Circle :node="bottomLeft" />
        <Circle :node="bottomRight" />
    </g>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { useNodeListStore } from "../stores/nodeListStore";
import { useCanvasStore } from "@/stores/canvasStore";
import { storeToRefs } from "pinia";

import Rect from "./basicShapes/Rect.vue";
import Circle from "./basicShapes/Circle.vue";

import { RectShapeObj, createRectShape } from "@/factories/RectShapeFactory";
import { CircleShapeObj, createCircleShape } from "@/factories/CircleShapeFactory";

import type { ShapeStyle } from "@/types";

const canvasStore = useCanvasStore()
const { toAbsolute } = canvasStore

const nodeStore = useNodeListStore();
const { selectedNode, selectedOrigin } =
    storeToRefs(nodeStore);

const rectShape = ref<RectShapeObj>(
    createRectShape({
        topLeft: { x: 0, y: 0 },
        size: { x: 0, y: 0 },
        round: { x: 0, y: 0 },
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
        stroke: "blue",
        fill: "transparent",
        strokeWidth: 2,
    })
);

const topLeft = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const topRight = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const bottomLeft = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

const bottomRight = ref<CircleShapeObj>(
    createCircleShape({
        center: {
            x: 0,
            y: 0,
        },
        radius: 4,
        rotation: { angle: 0, origin: { x: 0, y: 0 } },
        fill: "blue",
        stroke: "",
        strokeWidth: 0,
    })
);

watchEffect(() => {
    const shapeStyle = selectedNode.value as unknown as ShapeStyle
    const bb = selectedNode.value?.boundingBox

    if(bb && shapeStyle) {
            const nodeRotationAngle = shapeStyle.rotation.angle || 0;

            const tl = toAbsolute({
                x: bb.x,
                y: bb.y,
            })
            topLeft.value.center = tl
            topLeft.value.rotation.origin = selectedOrigin.value;
            topLeft.value.rotation.angle = nodeRotationAngle;
    

            const tr = toAbsolute({
                x: bb.x + bb.width,
                y: bb.y,
            })
            topRight.value.center = tr
            topRight.value.rotation.origin = selectedOrigin.value;
            topRight.value.rotation.angle = nodeRotationAngle;
    

            const bl = toAbsolute({
                x: bb.x,
                y: bb.y + bb.height,
            })
            bottomLeft.value.center = bl
            bottomLeft.value.rotation.origin = selectedOrigin.value;
            bottomLeft.value.rotation.angle = nodeRotationAngle;
    
            const br = toAbsolute({
                x: bb.x + bb.width,
                y: bb.y + bb.height,
            })
            bottomRight.value.center = br
            bottomRight.value.rotation.origin = selectedOrigin.value;
            bottomRight.value.rotation.angle = nodeRotationAngle;


            rectShape.value.x =  tl.x
            rectShape.value.y = tl.y

            rectShape.value.width =  br.x - tl.x
            rectShape.value.height = br.y - tl.y
  
            rectShape.value.rotation.origin = selectedOrigin.value
            rectShape.value.rotation.angle = nodeRotationAngle;
    }

});
</script>